package Ecom.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Ecom.Model.Cart;
import Ecom.Service.CartService;

@RestController
@RequestMapping("/ecom/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/add-product")
    public ResponseEntity<Cart> addProductToCart(@RequestParam Integer userId, @RequestParam Integer productId) {
        Cart cart = cartService.addProductToCart(userId, productId);
        return new ResponseEntity<>(cart, HttpStatus.CREATED);
    }

    @PutMapping("/increase-productQty/{userId}/{productId}")
    public ResponseEntity<Cart> increaseProductQuantity(
            @PathVariable Integer userId,
            @PathVariable Integer productId
    ) {
        Cart cart = cartService.increaseProductQuantity(userId, productId);
        return ResponseEntity.ok(cart);
    }

    @PutMapping("/decrease-productQty/{userId}/{productId}")
    public ResponseEntity<Cart> decreaseProductQuantity(
            @PathVariable Integer userId,
            @PathVariable Integer productId
    ) {
        Cart cart = cartService.decreaseProductQuantity(userId, productId);
        return ResponseEntity.ok(cart);
    }

    @DeleteMapping("/remove-product/{cartId}/{productId}")
    public ResponseEntity<String> removeProductFromCart(@PathVariable Integer cartId, @PathVariable Integer productId) {
        cartService.removeProductFromCart(cartId, productId);
        String msg = "Product is removed from cart";
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @DeleteMapping("/empty-Cart/{cartId}")
    public ResponseEntity<String> removeAllProductFromCart(@PathVariable Integer cartId) {
        cartService.removeAllProductFromCart(cartId);
        String msg = "All products removed from cart";
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @GetMapping("/products/{cartId}")
    public ResponseEntity<Cart> getAllCartProducts(@PathVariable Integer cartId) {
        Cart products = cartService.getAllCartProduct(cartId);
        return ResponseEntity.ok(products);
    }
}
