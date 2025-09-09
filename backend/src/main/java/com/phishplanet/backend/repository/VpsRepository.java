package com.phishplanet.backend.repository;

import com.phishplanet.backend.dto.VpsGetUserIdOnly;
import com.phishplanet.backend.entities.Vps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VpsRepository extends JpaRepository<Vps,Long> {
    @Query("SELECT v.osSystem AS osSystem, v.password AS password, v.username AS username, v.state AS state, v.id AS id, v.vpsIp AS vpsIp, v.user.id AS userId FROM Vps v WHERE v.user.id = :userId")
    List<VpsGetUserIdOnly> findByUserId(Long userId);
}
