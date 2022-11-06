import React from "react";
import Nav from "../Navbar/Nav";
import Banner from "../Banner/Banner";
import "./HomeScreen.css";
import Row from "../Row/Row";
import requests from "../../api/Requests";

function HomeScreen() {
  const getRows = () => {
    let rows = [];
    for (const [key, value] of Object.entries(requests)) {
      if (key === "fetchNetflixOriginals") {
        rows.push(
          <Row
            title={value.title}
            fetchUrl={value.url}
            isLarge={true}
            key={key}
          />
        );
      } else {
        rows.push(
          <Row
            title={value.title}
            fetchUrl={value.url}
            isLarge={false}
            key={key}
          />
        );
      }
    }
    return rows;
  };

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {getRows()}
    </div>
  );
}

export default HomeScreen;
