// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/64/5b/b4/645bb4732a420ead793fe7de33dc732a.jpg"
          alt=""
        />
        <p>
          Hello, My Name Is Abeer
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}//link taking us to the page of specific category
