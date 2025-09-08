package com.phishplanet.backend.filters;

import com.phishplanet.backend.services.CustomUserDetailsService;
import com.phishplanet.backend.utils.JwtProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private CustomUserDetailsService customUserDetailsService;
    private JwtProvider jwtProvider;

    public JwtAuthenticationFilter(CustomUserDetailsService customUserDetailsService, JwtProvider jwtProvider)
    {
        this.customUserDetailsService = customUserDetailsService;
        this.jwtProvider = jwtProvider;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;

        if(authHeader != null && authHeader.startsWith("Bearer "))
        {
            jwt= authHeader.substring(7);
            try{
                username = jwtProvider.getUsernameFromToken(jwt);
            }catch(Exception e){} //do smth later?
        }

        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null)
        {
            UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(username);

            if(jwtProvider.validateToken(jwt,userDetails))
            {
                UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );

                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }

        filterChain.doFilter(request,response);
    }
}
