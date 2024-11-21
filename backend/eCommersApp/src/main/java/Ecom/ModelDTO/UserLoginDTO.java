package Ecom.ModelDTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserLoginDTO {
    @NotNull(message = "Email Id Is Mandatory ,can Not Be Null")
    @NotBlank(message = "Email Id Is Mandatory")
    @Column(name = "email", unique = true)
    private String email;

    @NotNull(message = "Password is Mandatory ,can Not Be Null")
    @NotBlank(message = "Password Is Mandatory")
    @Size(max = 10,min = 5,message = "Password length should be more than 5 Character")
    private String password;
}
