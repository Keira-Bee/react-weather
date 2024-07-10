import React from "react";
import axios from "axios";
import { RevolvingDot } from "react-loader-spinner";

export default function Weather(props) {
  function handleSubmit(response) {
    let temperature = Math.round(response.data.main.temp);
    alert(`The weather in ${response.data.name} is ${temperature}°C`);
  }
  let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleSubmit);

  return (
    <RevolvingDot
      visible={true}
      height="80"
      width="80"
      color="blue"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
