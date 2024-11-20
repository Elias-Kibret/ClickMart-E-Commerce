package Ecom.ServiceImpl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import Ecom.Exception.CartException;
import Ecom.Exception.ProductException;
import Ecom.Exception.UserException;
import Ecom.Model.Cart;
import Ecom.Model.CartItem;
import Ecom.Model.Product;
import Ecom.Model.User;
import Ecom.Repository.CartItemRepository;
import Ecom.Repository.CartRepository;
import Ecom.Repository.ProductRepository;
import Ecom.Repository.UserRepository;
import Ecom.Service.CartService;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

	private final ProductRepository productRepository;
	private final CartRepository cartRepository;
	private final CartItemRepository cartItemRepository;
	private final UserRepository userRepository;

	@Override
	public Cart addProductToCart(Integer userId, Integer productId) throws CartException {
		Product existingProduct = productRepository.findById(productId)
				.orElseThrow(() -> new ProductException("Product not available in Stock..."));

		User existingUser = userRepository.findById(userId)
				.orElseThrow(() -> new UserException("User Not Found In Database"));

		if (existingUser.getCart() != null) {
			Cart userCart = existingUser.getCart();
			List<CartItem> cartItems = userCart.getCartItems();

			for (CartItem item : cartItems) {
				if (item.getProduct().getProductId().equals(productId)) {
					throw new CartException("Product Already in the Cart,Please Increase the Quantity");
				}
			}

			CartItem cartItem = new CartItem();
			cartItem.setProduct(existingProduct);
			cartItem.setQuantity(1);
			cartItem.setCart(userCart);
			userCart.getCartItems().add(cartItem);
			userCart.setTotalAmount(calculateCartTotal(cartItems));
			cartRepository.save(userCart);
			return userCart;
		} else {
			Cart newCart = new Cart();
			newCart.setUser(existingUser);
			existingUser.setCart(newCart);

			CartItem cartItem = new CartItem();
			cartItem.setProduct(existingProduct);
			cartItem.setQuantity(1);
			newCart.getCartItems().add(cartItem);
			cartItem.setCart(newCart);

			newCart.setTotalAmount(calculateCartTotal(newCart.getCartItems()));
			userRepository.save(existingUser);
			return existingUser.getCart();
		}
	}

	@Override
	public Cart increaseProductQuantity(Integer userId, Integer productId) throws CartException {
		User existingUser = userRepository.findById(userId)
				.orElseThrow(() -> new UserException("User Not Found in Database"));

		if (existingUser.getCart() == null) {
			throw new CartException("Cart Not Found");
		}

		Cart userCart = existingUser.getCart();
		List<CartItem> cartItems = userCart.getCartItems();

		CartItem cartItemToUpdate = cartItems.stream()
				.filter(item -> item.getProduct().getProductId().equals(productId))
				.findFirst()
				.orElseThrow(() -> new CartException("Cart Item Not Found"));

		cartItemToUpdate.setQuantity(cartItemToUpdate.getQuantity() + 1);
		userCart.setTotalAmount(calculateCartTotal(cartItems));
		return cartRepository.save(userCart);
	}

	@Override
	public Cart decreaseProductQuantity(Integer userId, Integer productId) throws CartException {
		User existingUser = userRepository.findById(userId)
				.orElseThrow(() -> new UserException("User Not Found in Database"));

		if (existingUser.getCart() == null) {
			throw new CartException("Cart Not Found");
		}

		Cart userCart = existingUser.getCart();
		List<CartItem> cartItems = userCart.getCartItems();

		CartItem cartItemToUpdate = cartItems.stream()
				.filter(item -> item.getProduct().getProductId().equals(productId))
				.findFirst()
				.orElseThrow(() -> new CartException("Cart Item Not Found"));

		int quantity = cartItemToUpdate.getQuantity();
		if (quantity > 1) {
			cartItemToUpdate.setQuantity(quantity - 1);
			userCart.setTotalAmount(calculateCartTotal(cartItems));
			return cartRepository.save(userCart);
		} else {
			throw new CartException("Product quantity cannot be decreased further");
		}
	}

	@Override
	public void removeProductFromCart(Integer cartId, Integer productId) throws CartException {
		Cart existingCart = cartRepository.findById(cartId).orElseThrow(() -> new CartException("Cart Not Found"));

		cartItemRepository.removeProductFromCart(cartId, productId);

		List<CartItem> list = existingCart.getCartItems();
		existingCart.setTotalAmount(calculateCartTotal(list));
		cartRepository.save(existingCart);
	}

	@Override
	public Cart getAllCartProduct(Integer cartId) throws CartException {
		Cart existingCart = cartRepository.findById(cartId).orElseThrow(() -> new CartException("Cart Not Found"));

		List<CartItem> cartItems = existingCart.getCartItems();
		if (cartItems.isEmpty()) {
			throw new CartException("Cart is Empty...");
		}
		return existingCart;
	}

	@Override
	public void removeAllProductFromCart(Integer cartId) throws CartException {
		Cart existingCart = cartRepository.findById(cartId).orElseThrow(() -> new CartException("Cart Not Found"));

		cartItemRepository.removeAllProductFromCart(cartId);

		existingCart.setTotalAmount(0.0);
		cartRepository.save(existingCart);
	}

	private double calculateCartTotal(List<CartItem> cartItems) {
		double total = 0.0;
		for (CartItem item : cartItems) {
			total += item.getProduct().getPrice() * item.getQuantity();
		}
		return total;
	}
}
