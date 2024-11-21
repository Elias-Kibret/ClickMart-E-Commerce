//package Ecom.Controller;
//
//import Ecom.Exception.UserException;
//import Ecom.ModelDTO.UserLoginDTO;
//import Ecom.ModelDTO.UserSignInDetail;
//import jakarta.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.*;
//import Ecom.Service.UserService;
//
//@RestController
//@RequestMapping("/ecom")
//public class LoginController {
//
//	@Autowired
//	private UserService userService;
//
//	@GetMapping("/signIn")
//	public ResponseEntity<UserSignInDetail> getLoggedInCustomerDetailsHandler(Authentication auth) {
//		try {var customer = userService.getUserByEmailId(auth.getName());
//			UserSignInDetail signinSuceesData = new UserSignInDetail();
//			signinSuceesData.setId(customer.getUserId());
//			signinSuceesData.setFirstNAme(customer.getFirstName());
//			signinSuceesData.setLastName(customer.getLastName());
//			signinSuceesData.setSigninStatus("Success");
//
//			return new ResponseEntity<>(signinSuceesData, HttpStatus.OK);}
//		catch(UserException ex ){
//			throw new UserException(" Invalid Password");
//		}
//
//	}
//	@PostMapping("/login")
//	public ResponseEntity<UserSignInDetail> loginHandler(@Valid @RequestBody UserLoginDTO loginRequest) {
//
//
//		System.out.println(loginRequest.getEmail());
//		System.out.println(loginRequest.getPassword());
//
//		try {
//			var customer = userService.validateUser(loginRequest.getEmail(), loginRequest.getPassword());
//			UserSignInDetail signInSuccessData = new UserSignInDetail(
//					customer.getUserId(),
//					customer.getFirstName(),
//					customer.getLastName(),
//					"Success"
//			);
//
//			return new ResponseEntity<>(signInSuccessData, HttpStatus.OK);
//		} catch (UserException ex) {
//			throw new UserException("Invalid email or password");
//		}
//	}
//}
