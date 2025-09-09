package com.phishplanet.backend.repository;


import com.phishplanet.backend.entities.Target;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TargetRepository extends JpaRepository<Target,Long> {
}
