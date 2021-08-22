import "./Online.scss";

export default function Online({ user }) {
  return (
    <div className="online">
      <li className="rightbarOnlineFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarOnlineFriendUsername">{user.username}</span>
      </li>
    </div>
  );
}
