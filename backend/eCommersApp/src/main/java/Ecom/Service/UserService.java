package Ecom.Service;

import java.util.List;

import Ecom.Controller.OrderController;
import Ecom.Model.User;
import org.springframework.stereotype.Service;

import Ecom.Exception.UserException;
import Ecom.ModelDTO.AdminDTO;
import Ecom.ModelDTO.CustomerDTO;
import Ecom.ModelDTO.UserDTO;


@Service
public interface UserService {
	
	
	
	public User getUserByEmail(String emailId)throws UserException;

	public User addUser(CustomerDTO customer)  throws UserException;
	
//	public User addUserAdmin(AdminDTO admin	)  throws UserException;

	public User changePassword(Integer userId, UserDTO customer)  throws UserException;

	public String activateSeller(Integer userId) throws UserException;

	public User getUserDetails(Integer userId)throws UserException;

	public List<User> getAllUserDetails() throws UserException;

	public User validateUser(String email, String password);
}
