package com.phishplanet.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Target {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long id;
}
