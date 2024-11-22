import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  getUserList: "users", // Endpoint to fetch the list of users
  getUserById: (id) => `users/${id}`, // Endpoint to fetch a user by ID
  updateUser: (id) => `users/${id}`, // Endpoint to update a user
  deleteUser: (id) => `users/${id}`, // Endpoint to delete a user
  
};

const userApi = {
  getUserList: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getUserList);
      return { response };
    } catch (err) {
      return { err };
    }
  },

  getUserById: async (id) => {
    try {
      const response = await publicClient.get(userEndpoints.getUserById(id));
      return { response };
    } catch (err) {
      return { err };
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await publicClient.put(
        userEndpoints.updateUser(id),
        userData
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await publicClient.delete(userEndpoints.deleteUser(id));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
