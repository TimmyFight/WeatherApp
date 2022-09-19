import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import SearchBar from "../../Modules/SearchBar/SearchBar";
import ActualWeather from "../../Modules/ActualWeather/ActualWeather";
import DailyForecast from "../../Modules/DailyForecast/DailyForecast";
import MatchedCities from "../../Modules/MatchedCities/MatchedCities";
import ButtonSearch from "../../Atoms/ButtonSearch/ButtonSearch";
import InputField from "../../Atoms/InputField/InputField";

const Home = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [actualWeather, setActualWeather] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [querryCity, setQuerryCity] = useState("");
  const [matchedCities, setMatchedCities] = useState([]);

  const fetchURLS = [
    `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
    `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
  ];
  let timerID;

  const getCities = async (querryValue, geoURLS) => {
    Promise.all(
      geoURLS.map((url) =>
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
          .catch((error) => console.error("Server", error))
      )
    ).then((data) => {
      setMatchedCities(data);
      setQuerryCity(querryValue);
    });
  };

  const searchHandler = (event) => {
    const querryValue = event.target.value;
    const geoURLS = [
      `${process.env.REACT_APP_GEO_API_URL}/direct?q=${querryValue}&limit=5&APPID=${process.env.REACT_APP_API_KEY}`,
    ];
    clearTimeout(timerID);
    if (querryValue.length > 2) {
      timerID = setTimeout(function () {
        getCities(querryValue, geoURLS);
      }, 500);
    }
  };

  const getActualWeather = async () => {
    Promise.all(
      fetchURLS.map((url) =>
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
          .catch((error) => console.error("Server", error))
      )
    ).then((data) => {
      setActualWeather(data[0]);
      setDailyForecast(data[1]);
    });
  };

  const checkStatus = (response) => {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const parseJSON = (response) => {
    return response.json();
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
          <InputField
            type="text"
            name="city"
            placeholder="Find a city"
            onChangeHandler={searchHandler}
          />
          <ButtonSearch
            value="geoLocation"
            title="Use Geo Location"
            onClickHandler={getCurrentPosition}
          />
          {querryCity.length > 2 ? (
            <MatchedCities data={matchedCities} />
          ) : null}
        </SearchBar>
      </NavigationBar>
      {typeof actualWeather.main != "undefined" ? (
        <ActualWeather data={actualWeather} />
      ) : (
        <div></div>
      )}
      {typeof dailyForecast.list != "undefined" ? (
        <DailyForecast data={dailyForecast} />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Home;
