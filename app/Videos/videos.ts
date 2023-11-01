import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";
const options: AxiosRequestConfig = {
  method: "GET",
  url: URL,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  },
};

export const fetchVideos = async (url: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${URL}/${url}`, options);
  return response;
};
