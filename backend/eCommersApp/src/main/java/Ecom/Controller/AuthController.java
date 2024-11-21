package Ecom.Controller;

import Ecom.ModelDTO.LoginRequest;
import Ecom.ModelDTO.LoginResponse;
import Ecom.SecurityConfig.SecurityConstants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKey;
import java.util.Date;

@RestController
@RequestMapping("/ecom")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        SecretKey key = Keys.hmacShaKeyFor(SecurityConstants.JWT_KEY.getBytes());
        String jwt = Jwts.builder()
                .setIssuer("ecommerce-app")
                .setSubject("JWT Token")
                .claim("username", authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 30000000))
                .signWith(key)
                .compact();

        return new LoginResponse("Login successful", jwt);
    }
}
