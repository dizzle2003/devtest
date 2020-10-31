import React, { useState, useEffect } from "react";
import Axios from "axios";
import logo from "./logo.png";
import design from "./design.png";

import "./App.css";
import PostList from "./reddit-posts/list/List";

function App() {
  const [test, setTest] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postsResponse = await Axios.get("http://localhost:3001/posts");
      setPosts(postsResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/user")
      .then(function (response) {
        // handle success
        console.log(response);
        setTest(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">White Whale Technical Test</h1>
      </header>
      <section style={{ display: "none" }}>
        <h2>Programming test</h2>
        <p className="App-intro">
          This test will be looking for a few things...
        </p>
        <ul>
          <li>Managing time</li>
          <li>Ability to use a new stack</li>
          <li>Project layout</li>
          <li>Database schema design</li>
          <li>Node js</li>
          <li>React</li>
          <li>CSS</li>
        </ul>
        <h3>Task</h3>
        <p>
          Create a reddit card list that pulls an array of posts from a backend
          service. The UI should be based on the designs below. Add as much
          functionality as possible within the time limits.
        </p>
        <img src={design} alt="design" />
      </section>

      <section>
        <PostList posts={posts} />
      </section>
    </div>
  );
}

export default App;
