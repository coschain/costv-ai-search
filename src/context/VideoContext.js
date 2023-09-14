import React, { createContext, useState } from "react";
import axios from "axios";
import { apiHost, apiToken } from "../api/config";

export const VideoContext = createContext();

const VideoContextProvider = (props) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .post(
        apiHost, 
        {
          "queries": [
            {
              "query": query,
              "top_k": 20
            }
          ]
        }, {
          headers: {
            Authorization: 'Bearer ' + apiToken,
            accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        console.log(response.data.results[0].results)
        setVideos(response.data.results[0].results);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <VideoContext.Provider value={{ videos, loading, runSearch }}>
      {props.children}
    </VideoContext.Provider>
  );
}

export default VideoContextProvider;
