package com.phishplanet.backend.controllers;

import com.phishplanet.backend.dto.AuthRequest;
import com.phishplanet.backend.dto.AuthResponse;
import com.phishplanet.backend.dto.ChangePasswordRequest;
import com.phishplanet.backend.dto.RegisterRequest;
import com.phishplanet.backend.entities.User;
import com.phishplanet.backend.repository.UserRepository;
import com.phishplanet.backend.utils.JwtProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager,JwtProvider jwtProvider, UserRepository userRepository,
                          PasswordEncoder passwordEncoder)
    {
        this.authenticationManager = authenticationManager;
        this.jwtProvider = jwtProvider;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String register (@RequestBody RegisterRequest req)
    {
        if(userRepository.findByUsername(req.getUsername()).isPresent()){
            return "Username already exists";
        }

        if(!req.getPassword().equals(req.getPassword_confirm()))
        {
            return "Passwords dont match";
        }

        User newUser = new User();
        newUser.setUsername(req.getUsername());
        newUser.setPassword(passwordEncoder.encode(req.getPassword()));
        newUser.setRole("ROLE_USER");

        userRepository.save(newUser);
        return "Registration successfull!";
    }

    @PostMapping("/changepassword")
    public String changePassword(@RequestBody ChangePasswordRequest req)
    {

        User user = userRepository.findByUsername(req.getUsername()).orElseThrow(()->new RuntimeException("User not found"));

        if(!passwordEncoder.matches(req.getOldPassword(), user.getPassword())){
            return "Old password is incorrect.";
        }

        user.setPassword(passwordEncoder.encode(req.getNewPassword()));
        userRepository.save(user);

        return "Password changed successfully";
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request){
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword())
            );

            String token = jwtProvider.generateJwtToken(request.getUsername());

            return new AuthResponse(token);
        } catch (AuthenticationException ex)
        {
            throw new RuntimeException("Invalid username or password!");
        }
    }
}
