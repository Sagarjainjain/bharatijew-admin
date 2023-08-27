import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://bharatijew-server.onrender.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Category
export const getCategory = () => API.get('category')
export const postCategory = (categorydata) => API.post("category", categorydata)
export const deleteCategory = (id) => API.delete(`category/${id}`);

// Melting
export const getMelting = () => API.get('melting')
export const postMelting = (meltingdata) => API.post("melting", meltingdata)
export const deleteMelting = (id) => API.delete(`melting/${id}`);

// SubCategory
export const getSubCategory = () => API.get('subcategory')
export const postSubCategory = (subcategorydata) => API.post("subcategory", subcategorydata)
export const deleteSubCategory = (id) => API.delete(`subcategory/${id}`);

// Products
export const getProduct = () => API.get('products')
export const postProduct = (productsdata) => API.post("products", productsdata)
export const deleteProduct = (id) => API.delete(`products/${id}`);

// auth

export const loginuser = (logindata) => API.post("auth/login", logindata )

// liverate

export const getlivegoldrate = () => API.get('livegold');
export const postlivegoldrate = (goldratedata) => API.post("livegold", goldratedata);
export const deletelivegoldrate = (id) => API.delete(`livegold/${id}`);
export const getlivesilverrate = () => API.get("livesilver");
export const postlivesilverrate = (silverratedata) =>
  API.post("livesilver", silverratedata);
export const deletelivesilverrate = (id) => API.delete(`livesilver/${id}`);


// banner
export const getbanner =()=>  API.get('/banner' );
export const postbanner = (bannerdata) => API.post("banner", bannerdata);
export const deletebanner = (id) => API.delete(`banner/${id}`);

// topost

export const gettoppost = () => API.get("/toppost");
export const posttoppost = (topostdata) => API.post("toppost", topostdata);
export const deletetoppost = (id) => API.delete(`toppost/${id}`);

