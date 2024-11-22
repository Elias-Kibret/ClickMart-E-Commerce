package Ecom.SecurityConfig;

import java.io.IOException;
import java.util.*;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtTokenGeneratorFilter {

    private static final SecretKey KEY = Keys.hmacShaKeyFor(SecurityConstants.JWT_KEY.getBytes());

    public static String generateToken(String username, String role, List<String> authorities) {
        return Jwts.builder()
                .setIssuer("ecommerce-app")
                .setSubject(username) // Set subject to username/email
                .claim("username", username) // Include username as a claim
                .claim("role", role) // Include role
                .claim("authorities", String.join(",", authorities)) // Include authorities as a comma-separated string
                .setIssuedAt(new Date()) // Token issued at time
                .setExpiration(new Date(System.currentTimeMillis() + 30000000)) // Token expiration
                .signWith(KEY) // Sign the token
                .compact();
    }
}

