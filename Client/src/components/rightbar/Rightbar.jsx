import "./Rightbar.scss";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b className="birthdayName">Teeka </b>and
            <b className="birthdayName"> 3 other friends</b> have a birthday
            today...
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends...</h4>
        <ul className="rightbarOnlineFriendList">
          <li className="rightbarOnlineFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/4.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarOnlineFriendUsername">Malkhaan</span>
          </li>
          <li className="rightbarOnlineFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarOnlineFriendUsername">Tillu</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
