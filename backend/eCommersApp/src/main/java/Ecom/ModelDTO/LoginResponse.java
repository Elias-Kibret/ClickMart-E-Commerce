package Ecom.ModelDTO;

import Ecom.Enum.UserAccountStatus;
import Ecom.Enum.UserRole;
import Ecom.Model.User;

public class LoginResponse {
    private String message;
    private String jwt;
    private  User user;

    private UserRole role;


    public LoginResponse(String message, String jwt, User user, UserRole role) {
        this.message = message;
        this.jwt = jwt;
        this.user = user;
        this.role = role;

    }

    // Getters and Setters

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
