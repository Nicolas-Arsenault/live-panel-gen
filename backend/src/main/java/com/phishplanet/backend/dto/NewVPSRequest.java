package com.phishplanet.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class NewVPSRequest {

    @JsonProperty("vpsIp")
    private String vpsIp;
    private String username;
    private String password;

    @JsonProperty("osSystem")
    private String osSystem;
}