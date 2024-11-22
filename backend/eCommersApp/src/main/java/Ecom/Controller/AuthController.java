package Ecom.Controller;

import Ecom.Model.User;
import Ecom.ModelDTO.LoginRequest;
import Ecom.ModelDTO.LoginResponse;
import Ecom.SecurityConfig.JwtTokenGeneratorFilter;
import Ecom.SecurityConfig.SecurityConstants;
import Ecom.Service.UserService;
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

    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        User user = userService.getUserByEmail(request.getUsername());
        String jwt = JwtTokenGeneratorFilter.generateToken(
                user.getEmail(),
                "ROLE_" + user.getRole().name(), // Add ROLE_ prefix
                authentication.getAuthorities().stream()
                        .map(auth -> auth.getAuthority())
                        .toList() // Collect authorities as a list
        );

        return new LoginResponse("Login successful", jwt, user, user.getRole());
    }
}
