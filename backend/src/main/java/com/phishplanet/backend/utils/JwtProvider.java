package com.phishplanet.backend.utils;

import com.phishplanet.backend.config.JwtProperties;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtProvider {

    private final JwtProperties jwtProperties;

    public JwtProvider(JwtProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    public String generateJwtToken(String username) {
        Date now = new Date(System.currentTimeMillis());
        Date expiration = new Date(System.currentTimeMillis() + jwtProperties.getExpiration());

        return Jwts
                .builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecret())
                .compact();
    }

    public String getUsernameFromToken(String token)
    {
        return Jwts.parser()
                .setSigningKey(jwtProperties.getSecret())
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token, UserDetails userDetails)
    {
        return (Jwts.parser().setSigningKey(jwtProperties.getSecret())
                .parseClaimsJwt(token)
                .getBody()
                .getExpiration().before(new Date(System.currentTimeMillis()))) && (
                        Jwts.parser().setSigningKey(jwtProperties.getSecret())
                                .parseClaimsJwt(token)
                                .getBody()
                                .getSubject().equals(userDetails.getUsername())
                );
    }

}
