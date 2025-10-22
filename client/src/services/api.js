/**
 * Centralized API service for all backend operations
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';

/**
 * Fetch portfolio data from the backend
 * @param {AbortSignal} signal - Optional abort signal for request cancellation
 * @returns {Promise<Object>} Portfolio data
 * @throws {Error} When the request fails
 */
export const getPortfolio = async (signal) => {
  const response = await fetch(`${API_BASE_URL}/api/portfolio`, {
    signal
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

/**
 * Submit contact form data to the backend
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.message - User's message
 * @returns {Promise<Object>} Response data with success message
 * @throws {Error} When the request fails
 */
export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};
