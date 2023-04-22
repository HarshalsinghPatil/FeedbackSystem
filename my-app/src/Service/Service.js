import React from 'react'
import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:8080/ideaApp/v1/ideas";


export const getAllEmp = async (id) => {
  id = id || '';
  return await axios.get(`${usersUrl}/${id}`);
}
