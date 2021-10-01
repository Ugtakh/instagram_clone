import { Avatar } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TelegramIcon from "@material-ui/icons/Telegram";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";

import "./style.scss";

interface IPost {
  username?: string;
  location?: string;
  imageUrl?: string;
}

const Post = ({ imageUrl, username, location }: IPost) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__left">
          <Avatar />
          <div className="post__header__left-name">
            <h3>{username}</h3>
            <p>Texas</p>
          </div>
        </div>
        <div className="post__header__right">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      {/* Post Image */}
      <img src={imageUrl} alt="" />
      {/* Footer */}
      <div className="post__footerIcon">
        <div className="post__footerIcon__left">
          <FavoriteBorderIcon />
          <TelegramIcon />
          <ModeCommentOutlinedIcon />
        </div>
        <div className="post__footerIcon__right">
          <TurnedInNotIcon />
        </div>
      </div>
      <div className="post__comment">
        <InsertEmoticonOutlinedIcon />
        <input type="text" placeholder="Add a comment" />
        <button onClick={() => console.log("Posted")}>Post</button>
      </div>
    </div>
  );
};

export default Post;
