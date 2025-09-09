package com.phishplanet.backend.controllers;

import com.phishplanet.backend.dto.NewVPSRequest;
import com.phishplanet.backend.entities.User;
import com.phishplanet.backend.entities.Vps;
import com.phishplanet.backend.repository.UserRepository;
import com.phishplanet.backend.repository.VpsRepository;
import com.phishplanet.backend.utils.JwtProvider;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vps")
public class VpsController {

    private JwtProvider jwtProvider;
    private UserRepository userRepo;
    private final VpsRepository vpsRepository;

    public VpsController(JwtProvider jwtProvider,UserRepository userRepo,
                         VpsRepository vpsRepository)
    {
        this.vpsRepository = vpsRepository;
        this.userRepo = userRepo;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/new")
    public String newVps(@RequestBody NewVPSRequest req)
    {
        String token = jwtProvider.getToken();
        String client = jwtProvider.getUsernameFromToken(token);

        User user = userRepo.findByUsername(client).orElseThrow(()-> new UsernameNotFoundException("Username not found."));

        Vps vps = new Vps();
        vps.setOsSystem(req.getOS());
        vps.setUser(user);
        vps.setPassword(req.getPassword());
        vps.setUsername(req.getUsername());
        vpsRepository.save(vps);


        return "Vps added successfully!";

    }

}
