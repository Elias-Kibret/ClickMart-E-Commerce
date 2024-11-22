package Ecom.ModelDTO;

import Ecom.Enum.UserRole;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CustomerDTO {

	@NotNull(message = "Email Id Is Mandatory ,can Not Be Null")
	@NotBlank(message = "Email Id Is Mandatory")
	@Column(name = "email", unique = true)
	private String email;

	@NotNull(message = "Password is Mandatory ,can Not Be Null")
	@NotBlank(message = "Password Is Mandatory")
	@Size(max = 10,min = 5,message = "Password length should be more than 5 Character")
	private String password;

	@NotNull(message = "name can Not be Null")
	@NotBlank(message = "Name can not be blank")
	private String name;

	@NotNull(message = "role can Not be Null")
	private UserRole role;

//	@NotNull(message = "Last can Not be Null")
//	@NotBlank(message = "Last Name can not be blank")
//	private String lastName;
//
//	@NotNull(message = "Phone Number can Not be Null")
//	@NotBlank(message = "Phone Number can not be blank")
//	@Size(max = 10,min = 10,message = "Phone Number should be minumum 10 digit max 12")
//	private String phoneNumber;
}
