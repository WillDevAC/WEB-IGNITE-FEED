import React from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

import styles from "./App.module.css";

import "../../global.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default App;
