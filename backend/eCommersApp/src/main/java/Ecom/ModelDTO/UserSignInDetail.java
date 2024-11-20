package Ecom.ModelDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignInDetail {
    Integer id;
    String firstNAme;
    String lastName;
    String signinStatus;

}
