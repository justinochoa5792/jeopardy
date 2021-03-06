import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

import Header from "./component/Header";

function App() {
  const [jeopardy, setJeopardy] = useState([]);

  const getQuestion = async () => {
    const response = await Axios.get("http://jservice.io/api/random?count=10");
    console.log(response.data);
    setJeopardy(response.data);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const renderQuestion = () => {
    return jeopardy.map((jeo) => {
      return (
        <ul>
          <li>{jeo.question}</li>
          <li>{jeo.answer}</li>
        </ul>
      );
    });
  };

  return (
    <div className="App">
      <Header />
      {renderQuestion()}
    </div>
  );
}

export default App;
