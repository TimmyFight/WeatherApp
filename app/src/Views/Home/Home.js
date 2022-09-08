import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import SearchBar from "../../Modules/SearchBar/SearchBar";
import ActualWeather from "../../Modules/ActualWeather/ActualWeather";
import ButtonSearch from "../../Atoms/ButtonSearch/ButtonSearch";

const Home = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [actualWeather, setActualWeather] = useState([]);

  const getActualWeather = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setActualWeather(result);
      })
      .catch((err) => {
        console.error("Server Error: ", err);
      });
  };

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      if (lat.length !== 0 && long.length !== 0) {
        getActualWeather();
      }
    });
  };

  useEffect(() => {
    getCurrentPosition();
  }, [lat, long]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className={styles.appBody}>
      <NavigationBar>
        <SearchBar>
          <ButtonSearch
            value="geoLocation"
            title="Use Geo Location"
            onClickHandler={getCurrentPosition}
          />
        </SearchBar>
      </NavigationBar>
      {typeof actualWeather.main != "undefined" ? (
        <ActualWeather data={actualWeather} />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Home;
