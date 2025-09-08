package com.phishplanet.backend.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String password_confirm;

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword_confirm() {
        return password_confirm;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword_confirm(String password_confirm) {
        this.password_confirm = password_confirm;
    }
}
