package com.phishplanet.backend.services;

import com.phishplanet.backend.entities.CustomUserDetails;
import com.phishplanet.backend.entities.User;
import com.phishplanet.backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepo;

    public CustomUserDetailsService(UserRepository userRepo)
    {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("Username not found"));
        return new CustomUserDetails(user);
    }
}
