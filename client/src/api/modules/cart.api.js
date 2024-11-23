import privateClient from "../client/private.client";

const cartEndPoints = {
  getCartsList: "cart", // Endpoint to fetch the list of users
  addProductToCart: (userId, productId) =>
    `cart/add-product?userId=${userId}&productId=${productId}`, // Endpoint to fetch a user by ID
  removeProductFromCart: (cartId, productId) =>
    `cart/remove-product/${cartId}/${productId}`,
};

const cartApi = {
  addProductToCart: async (userId, productId) => {
    console.log(userId, productId);
    try {
      const response = await privateClient.post(
        cartEndPoints.addProductToCart(userId, productId)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  removeProductFromCart: async (cartId, productId) => {
    console.log(cartId, productId);
    try {
      const response = await privateClient.delete(
        cartEndPoints.removeProductFromCart(cartId, productId)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default cartApi;
