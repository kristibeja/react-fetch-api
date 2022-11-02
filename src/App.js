import { useState, useEffect } from "react";
import Card from "./components/Card";

import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  const [allData, setAllData] = useState([]);
  const [scienceData, setScienceData] = useState([]);
  console.log(scienceData)

  useEffect(() => {
    fetch("https://inshorts.deta.dev/news?category=all")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data[1].title);
        // const all = { ...data.data };
        setAllData(data.data);
      })
      .catch((err) => console.log(err));

    fetchScience()
  }, []);

  // buttons array
  const buttonText = [
    "Science",
    "Sports",
    "Business",
    "World",
    "Politics",
    "Automobile",
    "All",
  ];

  function fetchScience() {
    fetch("https://inshorts.deta.dev/news?category=science")
      .then(response => response.json())
      .then(sData => {
        // console.log(sData.data)
        setScienceData(sData.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="appContainer">
      <div className="button-container">
        {buttonText.map((btn, ind) => {
          return <Buttons key={ind} text={btn} />;
        })}
      </div>
      <div className="content-container">
        {
          allData && allData.map((el, ind) => {
            return <Card title={el.title} key={ind} image={el.imageUrl} />
          })
        }
      </div>
    </div>
  );
}

export default App;
