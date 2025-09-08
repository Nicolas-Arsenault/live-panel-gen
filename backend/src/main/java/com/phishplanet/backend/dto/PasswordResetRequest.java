package com.phishplanet.backend.dto;

import lombok.Data;

@Data
public class PasswordResetRequest {
    private String username;
    private String oldPass;
    private String newPass;
}
