import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

export const productEndpoints = {
  getAll: "products/all",
  getByCategory: "products/category/:category",
  getById: "products/:id",
  addProduct: "products/add",
  updateProduct: "products/:id",
  deleteProduct: "products/:id",
};

export const productApi = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await publicClient.get(productEndpoints.getAll);
      console.log("All Products:", response);
      return response;
    } catch (err) {
      return { err };
    }
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    try {
      const endpoint = productEndpoints.getByCategory.replace(
        ":category",
        category
      );
      const response = await publicClient.get(endpoint);
      console.log(`Products in category ${category}:`, response);
      return response;
    } catch (err) {
      return { err };
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      const endpoint = productEndpoints.getById.replace(":id", id);
      const response = await publicClient.get(endpoint);
      console.log(`Product with ID ${id}:`, response);
      return response;
    } catch (err) {
      return { err };
    }
  },

  // Add a new product
  addProduct: async (productData) => {
    try {
      const response = await privateClient.post(
        productEndpoints.addProduct,
        productData
      );
      console.log("Product added:", response);
      return response;
    } catch (err) {
      return { err };
    }
  },

  // Update a product
  updateProduct: async (id, productData) => {
    try {
      const endpoint = productEndpoints.updateProduct.replace(":id", id);
      const response = await privateClient.put(endpoint, productData);
      console.log(`Product with ID ${id} updated:`, response);
      return response;
    } catch (err) {
      return { err };
    }
  },

  // Delete a product
  deleteProduct: async (id) => {
    try {
      const endpoint = productEndpoints.deleteProduct.replace(":id", id);
      const response = await privateClient.delete(endpoint);
      console.log(`Product with ID ${id} deleted:`, response);
      return response;
    } catch (err) {
      return { err };
    }
  },
};
