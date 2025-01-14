import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "https://basic-auth-app-api-with-django-ypiumt8jv-m0hamadys-projects.vercel.app/api", // Replace with your backend URL
});

// Add request interceptor to include the access token in the Authorization header
api.interceptors.request.use(
  (config) => {
    // Get the access token from local storage
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // Attach the token to the Authorization header
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration and refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token (403 or 401 status)
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Try to refresh the access token using the refresh token
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const response = await axios.post("https://basic-auth-app-api-with-django-ypiumt8jv-m0hamadys-projects.vercel.app/apiauth/users/token/refresh/", {
            refresh: refreshToken,
          });

          // If token refresh is successful, update the access token
          const newAccessToken = response.data.access;

          // Store the new access token in local storage
          localStorage.setItem("accessToken", newAccessToken);

          // Update the Authorization header with the new access token
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Retry the original request with the new access token
          return api(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          // If token refresh fails, log the user out
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // Redirect to login
        }
      }
    }

    // If the error is not token-related, just reject the promise
    return Promise.reject(error);
  }
);

export default api;
