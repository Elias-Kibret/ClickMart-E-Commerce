import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

export const productEndpoints = {
  getAll: "products/all",
  getByCategory: "products/categorry/:category",
};

export const productApi = {
  getAllProducts: async () => {
    try {
      const response = await publicClient.get(productEndpoints.getAll);
      console.log(response);

      return response;
    } catch (err) {
      return { err };
    }
  },
};
