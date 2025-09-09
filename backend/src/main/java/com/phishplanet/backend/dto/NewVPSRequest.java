package com.phishplanet.backend.dto;

import lombok.Data;

@Data
public class NewVPSRequest {
    private String ip;
    private String username;
    private String password;
    private String OS;
}