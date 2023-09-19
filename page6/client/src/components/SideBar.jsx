import React from "react";

import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

const SideBar = ({ setChatLog }) => {
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
      <div className="project-info">
        <div className="about">
          <h2>About this project -</h2>
          <p>It's a ChatGPT clone.</p>
        
        </div>
        <div className="rules">
          <h2>Rules to use -</h2>
          <p>
            Please! Don't abuse the AI by asking too much questions.
          </p>
        </div>
        <div className="creator">
          <h2>Developer</h2>
         
          <a
            href="https://github.com/HUZAIFASAJJAD012?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={github} alt="github" />
            </div>
            <span>huzaifasajjad</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
