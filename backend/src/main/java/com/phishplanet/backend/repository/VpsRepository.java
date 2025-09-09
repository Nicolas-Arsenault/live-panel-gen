package com.phishplanet.backend.repository;

import com.phishplanet.backend.entities.Vps;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VpsRepository extends JpaRepository<Vps,Long> {
    List<Vps> findByUserId(Long userId);
}
