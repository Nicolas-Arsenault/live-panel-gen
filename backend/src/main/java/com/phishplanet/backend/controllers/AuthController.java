package com.phishplanet.backend.controllers;

import com.phishplanet.backend.dto.AuthRequest;
import com.phishplanet.backend.dto.AuthResponse;
import com.phishplanet.backend.utils.JwtProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtProvider jwtProvider;

    public AuthController(AuthenticationManager authenticationManager,JwtProvider jwtProvider)
    {
        this.authenticationManager = authenticationManager;
        this.jwtProvider = jwtProvider;
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
