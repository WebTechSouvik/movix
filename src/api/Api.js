import axios from "axios";

export const getDataFromApi = async (url,page, genre) => {
  const apiToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWI3YWRmNGU1OGU1MjUyNGQzMGRiMmViZTY5NDc1OCIsInN1YiI6IjY0YzI1ZjYxMTNhMzIwMDBlMjFiMmJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xxB4zqdlA4XFIv-4UJOuaDX93r_MOcjSSnLcmEf3n9Y";
  const base_ulr = "https://api.themoviedb.org/3";

  const headers = {
    Authorization: "Bearer " + apiToken,
  };
const params={
  page
}
if(genre){
  params. with_genres=genre
}
  try {
  console.log(params)
    const { data } = await axios.get(base_ulr + url, {
      headers,
      params
    });
    // console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};
