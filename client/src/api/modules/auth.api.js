import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const authEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
};

const authApi = {
  signin: async ({ username, password }) => {
    try {
      console.log("send request");
      const response = await publicClient.post(authEndpoints.signin, {
        username,
        password,
      });

      return { response };
    } catch (err) {
      console.log("err");
      return { err };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(authEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(authEndpoints.getInfo);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(authEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmNewPassword,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default authApi;
