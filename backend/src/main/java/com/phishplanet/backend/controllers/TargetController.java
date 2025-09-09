package com.phishplanet.backend.controllers;

import com.phishplanet.backend.dto.TargetRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TargetController {

    @PostMapping("/target")
    public String addTarget(@RequestBody TargetRequest req)
    {

    }
}
