"use client";
import jwt from 'jsonwebtoken';

const REFRESH_INTERVAL = 1500 * 1000; // 25 minutes

const getToken = () => {
  return localStorage.getItem("authToken");
};

const decodeToken = (token) => {
  if (!token) return null;
  return jwt.decode(token);
};

const isTokenExpired = (token) => {
  const decodedToken = decodeToken(token);
  if (!decodedToken) return true;

  const currentTime = Date.now() / 1000; // Current time in seconds
  return decodedToken.exp < currentTime; // Check if token is expired
};

// Function to set the token in local storage
const setToken = (token) => {
  localStorage.setItem("authToken", token);
};

const refreshAuthToken = async () => {
  try {
      const response = await fetch('http://localhost:3001/auth/refresh-token', {
          method: 'POST',
          headers: {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}` // Use the current access token
          }
          
          },
          body: JSON.stringify({ refreshToken: localStorage.getItem("authToken") }), // Send refresh token
      });

      if (!response.ok) {
          throw new Error('Failed to refresh token');
      }

      const data = await response.json();
      const newAccessToken = data.access_token;
      setToken(newAccessToken); // Save the new access token

      // Optionally, schedule the next refresh
      const decodedNewToken = decodeToken(newAccessToken);
      const refreshIn = (decodedNewToken.exp * 1000) - Date.now() - 5000; // Refresh 5 seconds before expiration
      setTimeout(refreshAuthToken, refreshIn);
  } catch (error) {
      console.error("Failed to refresh token:", error);
      handleLogout(); // Handle logout if refresh fails
  }
};

const scheduleTokenRefresh = () => {
  setTimeout(refreshAuthToken, REFRESH_INTERVAL); // Initial schedule for 25 minutes
};

const handleLogout = () => {
  localStorage.removeItem("authToken");
  window.location.href = '/login';
};

const checkUserRoleAndRedirect = () => {
  console.log('check user role function is called');

  const token = getToken();

  if (!token || isTokenExpired(token)) {
    handleLogout(); // Logout if token is missing or expired
    return;
  }

  const decodedToken = decodeToken(token);
  const userRole = decodedToken?.role;
  const currentRoute = window.location.pathname;
  console.log('currentRoute', currentRoute);

  if (userRole === 'user') {
    window.location.href = '/manager/GetStarted';
  } else if (userRole === 'hostelOwner') {
    window.location.href = '/manager/dashboard';
  } else if (userRole === 'manager') {
    window.location.href = '/manager/listing';
  }
};

const testFunction = () => {
  const token = getToken();
  const decodedToken = decodeToken(token);
  console.log('token', decodedToken);
};

export { setToken, getToken, refreshAuthToken, scheduleTokenRefresh, handleLogout, checkUserRoleAndRedirect, isTokenExpired, testFunction, decodeToken };
