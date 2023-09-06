import { API_KEY, baseUrl } from "./Constants/Constants";
export const orginals = `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`;
export const action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const documentary = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`;