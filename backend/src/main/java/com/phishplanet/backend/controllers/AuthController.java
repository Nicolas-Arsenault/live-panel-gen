package com.phishplanet.backend.controllers;

import com.phishplanet.backend.dto.AuthRequest;
import com.phishplanet.backend.dto.AuthResponse;
import com.phishplanet.backend.dto.PasswordResetRequest;
import com.phishplanet.backend.dto.RegisterRequest;
import com.phishplanet.backend.entities.User;
import com.phishplanet.backend.repository.UserRepository;
import com.phishplanet.backend.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired private AuthenticationManager authManager;
    @Autowired private UserRepository userRepo;
    @Autowired private PasswordEncoder encoder;
    @Autowired private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest req)
    {
        if(userRepo.findByUsername(req.getUsername()).isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");

        }
        var user = new User(null, req.getUsername(), encoder.encode(req.getPassword()));
        userRepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req)
    {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(req.getUsername(),req.getPassword()));
        String token = jwtUtil.generateToken(req.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody PasswordResetRequest req)
    {
        var user = userRepo.findByUsername(req.getUsername()).orElse(null);
        if(user == null)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Username not found");
        }
        user.setPassword(encoder.encode(req.getNewPass()));
        userRepo.save(user);
        return ResponseEntity.ok("Password updated successfully");
    }


}
