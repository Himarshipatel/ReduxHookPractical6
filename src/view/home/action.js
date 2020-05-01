import axios from "axios";

export const country = (country) => {
  return (dispatch) => {
    dispatch({ type: "COUNTRIES_FETCH_PENDING" });

    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=39e0901ffcc3452faf07ada3c1f7f326`
      )
      .then((res) => {
        dispatch({ type: "COUNTRIES_FETCH_SUCCESS", stats: res.data });
      })
      .catch((error) => {
        dispatch({ type: "COUNTRIES_FETCH_FAILURE", message: error.response });
      });
  };
};
