import axios from "axios";

const API_URL = "https://localhost:7276/api";

const api = axios.create({
  baseURL: API_URL,
});

// Tự động gắn token vào mỗi request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const register = (data) => api.post("/auth/register", data);
export const login = (data) => api.post("/auth/login", data);

// Products
export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post("/products", data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// Categories
export const getCategories = () => api.get("/categories");
export const createCategory = (data) => api.post("/categories", data);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);

// Cart
export const getCart = () => api.get("/cart");
export const addToCart = (data) => api.post("/cart", data);
export const removeFromCart = (id) => api.delete(`/cart/${id}`);
export const clearCart = () => api.delete("/cart");
export const checkout = () => api.post("/cart/checkout");

// Orders
export const getMyOrders = () => api.get("/orders");
export const getAllOrders = () => api.get("/orders/all");
export const updateOrderStatus = (id, status) =>
  api.put(`/orders/${id}/status`, JSON.stringify(status), {
    headers: { "Content-Type": "application/json" },
  });

export default api;
