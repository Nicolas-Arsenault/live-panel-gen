package com.phishplanet.backend.controllers;

import com.phishplanet.backend.dto.NewVPSRequest;
import com.phishplanet.backend.dto.VpsGetUserIdOnly;
import com.phishplanet.backend.entities.User;
import com.phishplanet.backend.entities.Vps;
import com.phishplanet.backend.repository.UserRepository;
import com.phishplanet.backend.repository.VpsRepository;
import com.phishplanet.backend.utils.JwtProvider;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vps")
public class VpsController {

    private final String VPS_STATE_ACTIVE = "active";
    private final String VPS_STATE_ERROR = "error";
    private final String VPS_STATE_INACTIVE = "inactive";
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

    @GetMapping("/myvps")
    public List<VpsGetUserIdOnly> getVps()
    {
        String token = jwtProvider.getToken();
        String client = jwtProvider.getUsernameFromToken(token);

        User user = userRepo.findByUsername(client).orElseThrow(()-> new UsernameNotFoundException("Username not found."));

        return vpsRepository.findByUserId(user.getUserId());
    }

    @PostMapping("/new")
    public String newVps(@RequestBody NewVPSRequest req)
    {
        String token = jwtProvider.getToken();
        String client = jwtProvider.getUsernameFromToken(token);

        User user = userRepo.findByUsername(client).orElseThrow(()-> new UsernameNotFoundException("Username not found."));

        Vps vps = new Vps();
        vps.setOsSystem(req.getOsSystem());
        vps.setUser(user);
        vps.setPassword(req.getPassword());
        vps.setUsername(req.getUsername());
        vps.setVpsIp(req.getVpsIp());
        vps.setState(VPS_STATE_INACTIVE);
        vpsRepository.save(vps);


        return "Vps added successfully!";
    }

    //TODO: Add update states posts etc...

}
