import React from "react";
import { useEffect, useState } from "react";
import AllComplains from "./components/AllComplains.jsx";
import CreateComplain from "./components/CreateComplain.jsx";
import Home from './components/HomeLeft.jsx'
import { AiOutlineMenu, AiOutlineClose,AiOutlineSearch } from "react-icons/ai";
import quotes from "./images/quotes1.png";
import axios from "axios";
<<<<<<< HEAD
import "./index.css";

let App = () => {
  // show and hide menu
  var [menu, setMenu] = useState(true);
  var toggleMenu = () => {
    if (menu === true) {
      return (
        <div className="navs">
          <div className="nav_menu" id="nav-menu">
            <div className="nav_close" id="nav-close">
              <AiOutlineClose />
            </div>
            <ul className="nav_list">
              <li className="nav_item">
                <div className="nav_linksignIn">sign in </div>
              </li>
              <li className="nav_item">
                <div className="nav_linksignUp"> Register </div>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav_menu show" id="nav-menu">
          <div className="nav_close" id="nav-close">
            <AiOutlineClose
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </div>
          <ul className="nav_list">
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
            <li className="nav_item">
              <div href="#" className="nav_link"></div>
            </li>
          </ul>
        </div>
      );
    }
  };
  return (
    <div>
      <head>
        <title> You are safe </title>
      </head>
      {/* first navbar */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="first_nav">
            <div className="consul-header">
              {" "}
              <img className="quote-header" src={quotes} /> Consul
            </div>
          </div>
          <div className="nav_toggle" id="nav-toggle">
            <AiOutlineMenu
              onClick={() => {
                setMenu(!menu);
              }}
            />
          </div>
          {toggleMenu()}
        </nav>
      </header>

      <main></main>
      {/* second navabar */}
      <header className="l-header2">
        <nav className="nav bd-grid2">
          <ul className="nav_list2">
            <li className="nav_item2">
              <div className="nav_link2">Debates</div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2">Proposals </div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2">Voting</div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2"> collaborative legislation </div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2"> Participatory budgeting </div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2"> you are safe</div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2"> SDG </div>
            </li>
            <li className="nav_item2">
              <div className="nav_link2"> Help</div>
            </li>
            <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="search" />
      <button type="submit" class="searchButton">
       <AiOutlineSearch />
     </button>
   </div>
</div>
          </ul>
        </nav>
      </header>
{/* Home page */}
<Home />
      <footer></footer>
    </div>
  );
=======

import "./App.css";

let App = () => {
  const [view, setView] = useState("AllComplains");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/posts").then((res) => {
      setData(res.data);
    });
  }, []);
  const deleteData = (id) =>{
    axios.delete(`http://localhost:4000/api/${id}`);
  }
  const update=(id,post)=>{
    axios.put(`/api/update/${id}`,post)
  }

  const changeView = (newview) => {
    setView(newview);
  };
  const addComplain = (complain) => {

    console.log(complain);
    axios
      .post("", complain)
      .then((res) => console.log("passed"))
      .catch((err) => console.log(err));
  };
  return (
    <>
          <div>
        <nav className=" nav">
          <div
            className={
              view !== "createcomplain"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              setView("createcomplain");
            }}
          >
            Create Post
          </div>
          <div
            className={
              view === "allcomplains" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => {
              setView("allcomplains");
              // console.log(this.state)
            
            }}
          >
            All Posts
          </div>
         
        </nav>

      </div>
  
      {view === "AllComplains" && (
        <AllComplains data={data} changeView={changeView} />
      )}
      {view === "OneComplain" && <OneComplain />}
      {view === "createComplain" && (
        <CreateComplain addComplain={addComplain} />
      )}
    </>
  );
=======
    axios
      .post("http://localhost:4000/uas", complain)
      .then((res) => console.log("passed"))
      .catch((err) => console.log(err));
  };
  if (view === "AllComplains") {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <AllComplains data={data} changeView={changeView} delete={deleteData} update={update} />
        </div>
        <button
          style={{
            height: "35px",
            width: "100px",
            position: "relative",
            top: "100px",
            left: "200px",
          }}
          onClick={() => {
            changeView("add");
          }}
        >
          add complain
        </button>
        <div style={{ display: "flex", position: "relative", top: "200px" }}>
          <button style={{ height: "35px", width: "100px" }}>rape</button>
          <button style={{ height: "35px", width: "100px" }}> violence</button>
          <br />
          <button style={{ height: "35px", width: "100px" }}>
            harrassement
          </button>
          <button style={{ height: "35px", width: "100px" }}> brakage</button>
        </div>
      </div>
    );
  }
  if (view === "add") {
    return <CreateComplain addComplain={addComplain} />;
  }

>>>>>>> 647bb8c7b0d8d4e0998a99dc62547561210d5072
};

export default App;
