package com.phishplanet.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Vps {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String vpsIp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "clientid", referencedColumnName = "userId")
    private User user;

    private String username;
    private String password; //to encrypt

    private String osSystem;

    //active, inactive or error
    private String state;
}
