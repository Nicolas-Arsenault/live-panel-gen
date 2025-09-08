package com.phishplanet.backend.utils;

import com.phishplanet.backend.config.JwtProperties;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
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
                .signWith(Keys.hmacShaKeyFor(jwtProperties.getSecret().getBytes()), SignatureAlgorithm.HS256)
                .compact();
    }

    public String getUsernameFromToken(String token)
    {
        JwtParser parser = Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(jwtProperties.getSecret().getBytes()))
                .build();

        return parser
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        JwtParser parser = Jwts
                .parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(jwtProperties.getSecret().getBytes()))
                .build();

        String username = parser
                .parseClaimsJws(token)
                .getBody()
                .getSubject();

        Date expiration = parser
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();

        return username.equals(userDetails.getUsername()) && expiration.after(new Date());
    }
}
