import React, { useContext, useEffect } from "react";
import { VideoContext } from "../context/VideoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { videos, loading, runSearch } = useContext(VideoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={videos} />}
    </div>
  );
};

export default Container;
