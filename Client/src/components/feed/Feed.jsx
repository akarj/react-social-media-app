import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.scss";
import { Posts } from "../../dummyData";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.userId} post={p} />
        ))}
      </div>
    </div>
  );
}
