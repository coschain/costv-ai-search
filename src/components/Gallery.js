import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(video => {
      let id = video.id;
      let title = video.metadata.title;
      let url = video.metadata.cover;
      let link = "https://cos.tv/videos/play/" + video.metadata.document_id
      return <Image url={url} key={id} title={title} link={link} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
