import { useState, useEffect } from "react";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
// import Page from "./components/Page";
import "./App.css";


function App() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchAll() //showing all data when app is rendered
  }, []);

  // buttons array
  const buttonText = [
    "Science",
    "Sports",
    "Business",
    "World",
    "Politics",
    "Automobile",
    "All"
  ];

  //fetching all data function
  const fetchAll = async () => {
    await fetch("https://inshorts.deta.dev/news?category=all")
    .then((response) => response.json())
    .then((data) => {
      setAllData(data.data);
    })
    .catch((err) => console.log(err));
  }

  //on button click, fetch respective data
  async function handleClick(btn) {
    console.log(btn)
    await fetch(`https://inshorts.deta.dev/news?category=${btn.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      setAllData(data.data);
      console.log(data.data);
    })
    .catch((err) => console.log(err));

    console.log("handling click"); 
  }


  return (
    <div className="appContainer">
      <div className="button-container">
        {buttonText.map((btn, ind) => {
          return <Buttons key={ind} text={btn} clicked={() => handleClick(btn)} />;
        })}
      </div>
      <div className="content-container">
        {
          allData.map((el, ind) => {
            return <Card title={el.title} key={ind} image={el.imageUrl} />
          })
        }
      </div>
    </div>
  );
}

export default App;
