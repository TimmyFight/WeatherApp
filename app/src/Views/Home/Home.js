import React, { useState, useEffect, useCallback } from "react";
import styles from "./Home.module.css";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import SearchBar from "../../Modules/SearchBar/SearchBar";
import ButtonSearch from "../../Atoms/ButtonSearch/ButtonSearch";

const Home = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const getCurrentPosition = useCallback(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Position set: ", lat, long);
    });
  }, [lat, long]);

  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

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
    </section>
  );
};

export default Home;
