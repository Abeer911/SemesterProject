import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">COMSATS BLOG</span>
        <span className="headerTitleLg">COMSATS Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpapercave.com/wp/wp4754114.jpg"
        alt=""
      />
    </div>
  );
}
