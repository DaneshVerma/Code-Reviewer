import React, { useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
const ReviewArea = ({ review }) => {
  return (
    <div>
      <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
    </div>
  );
};

export default ReviewArea;
