package com.phishplanet.backend.dto;

public interface VpsGetUserIdOnly {
    Long getId();
    Long getUserId();
    String getVpsIp();
    String getState();
    String getOsSystem();
    String getUsername();
    String getPassword();
}
