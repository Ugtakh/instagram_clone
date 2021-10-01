import React, { useState } from "react";
import Header from "../../Components/Header";
import Post from "../../Components/Post";

import "./style.scss";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      username: "Angular",
      imageUrl:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png",
    },
    {
      username: "React",
      imageUrl:
        "https://images.ctfassets.net/51xdmtqw3t2p/2w0H06U9MYaJNsonXhyD3I/0cd72a4b4e01460bcd7145e984b05c38/Portada_react.jpg?w=1280&q=50",
    },
    {
      username: "Typescript",
      imageUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6McQQU7i--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j4hwcf7lntmqyha7ras5.png",
    },
  ]);
  return (
    <div>
      {/* Main Header */}
      <Header />
      {/* ===== Posts =====
        <Post />
        <Post />
      */}
      <div className="timeline">
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
