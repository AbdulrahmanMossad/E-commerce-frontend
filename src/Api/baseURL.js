import axios from "axios";
// baseurl is fixed in all project nd we can change it if i change it in mongodbthen change it here only (هيسمع في كل البروجكت)
// const baseUrl = axios.create({ baseURL: "http://127.0.0.1:8000" })
const baseUrl = axios.create({ baseURL: "https://e-commerce-backend-1-q982.onrender.com" })
export default baseUrl;
