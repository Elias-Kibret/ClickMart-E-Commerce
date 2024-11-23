import privateClient from "../client/private.client";

const orderEndpoints = {
  getOrdersList: "order", // Endpoint to fetch the list of users
  placeOrder: (userId) => `orders/placed/${userId}`, // Endpoint to fetch a user by ID
  makePayment: (orderId, userId) =>
    `order-payments/makePayment?orderId=${orderId}&userId=${userId}`,
};

const orderApi = {
  placeOrder: async (userId) => {
    console.log(userId);
    try {
      const response = await privateClient.post(
        orderEndpoints.placeOrder(userId)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  makePayment: async (orderId, userId) => {
    console.log(orderId);
    try {
      const response = await privateClient.post(
        orderEndpoints.makePayment(orderId, userId)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default orderApi;
