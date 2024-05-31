import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValueMyHome = () => {
    setNavbarValue("My Home");
  };
  const changeNavbarValueMyService = () => {
    setNavbarValue("My Service");
  };
  const changeNavbarValueMyBlog = () => {
    setNavbarValue("My Blog");
  };
  const changeNavbarValueMyContact = () => {
    setNavbarValue("My Contact");
  };

  return (
    <div className="App">
      <NavigationBar navValue={getNavbarValue} />
      <h1>INI HOMEPAGE</h1>
      <p>Belajar Menggunakan State</p>
      <button className="btn jarak" onClick={() => changeNavbarValueMyHome()}>
        <a href="#">
          <span>Ubah Navigasi</span>
        </a>
      </button>
      <br />
      <button
        className="btn jarak"
        onClick={() => changeNavbarValueMyService()}
      >
        <a href="#">
          <span>Ubah Navigasi</span>
        </a>
      </button>
      <br />
      <button className="btn jarak" onClick={() => changeNavbarValueMyBlog()}>
        <a href="#">
          <span>Ubah Navigasi</span>
        </a>
      </button>
      <br />
      <button
        className="btn jarak"
        onClick={() => changeNavbarValueMyContact()}
      >
        <a href="#">
          <span>Ubah Navigasi</span>
        </a>
      </button>
    </div>
  );
}

export default App;
