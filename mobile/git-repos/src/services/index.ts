import axios from "axios";
import { baseURL } from "./urls";

const token = process.env.GITHUB_TOKEN;

const apiGateway = axios.create({
  baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

export { apiGateway };
