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
    private long id;

    private String vpsIp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "clientid", referencedColumnName = "id")
    private User user;

    private String username;
    private String password; //to encrypt

    private String osSystem;
}
