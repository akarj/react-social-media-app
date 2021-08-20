import "./Post.scss";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Random Chikibum</span>
            <span className="postDate">3 Lifetime ago...</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Big Bang post</span>
          <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className="likeIcon" />
            <img src="assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}