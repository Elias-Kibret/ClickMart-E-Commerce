package Ecom.ServiceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import Ecom.Controller.OrderController;
import Ecom.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Ecom.Enum.UserAccountStatus;
import Ecom.Enum.UserRole;
import Ecom.Exception.UserException;
import Ecom.ModelDTO.AdminDTO;
import Ecom.ModelDTO.CustomerDTO;
import Ecom.ModelDTO.UserDTO;
import Ecom.Repository.UserRepository;
import Ecom.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User getUserByEmail(String emailId) throws UserException {
		return userRepository.findByEmail(emailId).orElseThrow(() -> new UserException("User not found"));

	}



      @Override
	public User validateUser(String email, String password) {
		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new UserException("User not found"));

		// Validate password
		if (!passwordEncoder.matches(password, user.getPassword())) {
			throw new UserException("Invalid credentials");
		}

		return user;
	}

	@Override
	public User addUser(CustomerDTO customer) throws UserException {
		if (customer == null)
			throw new UserException("customer Can not be Null");
		Optional<User> findByEmail = userRepository.findByEmail(customer.getEmail());
		if (findByEmail.isPresent()) {
			System.out.println("inside add user method");
			throw new RuntimeException("Email alredy Register");
		}

		User newCustomer = new User();
		newCustomer.setEmail(customer.getEmail());
		newCustomer.setPassword(customer.getPassword());
		newCustomer.setName(customer.getName());
		newCustomer.setRole(customer.getRole());
		newCustomer.setRegisterTime(LocalDateTime.now());
		if(newCustomer.getRole() == UserRole.BUYER )
			newCustomer.setUserAccountStatus(UserAccountStatus.ACTIVE);
		else
		newCustomer.setUserAccountStatus(UserAccountStatus.DEACTIVETE);


		return userRepository.save(newCustomer);
	}

//	@Override
//	public User addUserAdmin(AdminDTO customer) throws UserException {
//		if (customer == null)
//			throw new UserException("admin Can not be Null");
//		Optional<User> findByEmail = userRepository.findByEmail(customer.getEmail());
//		if (findByEmail.isPresent()) {
//			System.out.println("inside add user method");
//			throw new RuntimeException("Email alredy Register");
//		}
//		User newAdmin = new User();
//		newAdmin.setEmail(customer.getEmail());
//		newAdmin.setPassword(customer.getPassword());
//		newAdmin.setName(customer.getFirstName());
//		newAdmin.setRole(customer.get);
//		newAdmin.setRegisterTime(LocalDateTime.now());
//		newAdmin.setUserAccountStatus(UserAccountStatus.ACTIVE);
//
//		return userRepository.save(newAdmin);
//	}

	public User changePassword(Integer userId, UserDTO customer) throws UserException {
		User user = userRepository.findById(userId).orElseThrow(() -> new UserException("User not found"));
		if (customer.getNewPassword().length() >= 5 && customer.getNewPassword().length() <= 100) {
			user.updatePassword(customer.getNewPassword(), passwordEncoder);
			return userRepository.save(user);
		} else {
			throw new UserException("provide valid  password");
		}

	}

	
	@Override
	public String activateSeller(Integer userId) throws UserException {
		User existingUser = userRepository.findById(userId).orElseThrow(() -> new UserException("User not found"));
		existingUser.setUserAccountStatus(UserAccountStatus.ACTIVE);
		userRepository.save(existingUser);
		return "Account deactivet Succesfully";
	}

	@Override
	public User getUserDetails(Integer userId) throws UserException {
		User existingUser = userRepository.findById(userId).orElseThrow(() -> new UserException("User not found"));
		return existingUser;
	}

	@Override
	public List<User> getAllUserDetails() throws UserException {

		List<User> existingAllUser = userRepository.findAll();
		if (existingAllUser.isEmpty()) {
			new UserException("User list is Empty");
		}
		return existingAllUser;
	}


}
