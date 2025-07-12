import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectWeather } from "./weatherSlice";
import { useEffect } from "react";

export const WeatherStatus = () => {
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector(selectWeather);

  console.log(weather);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWeather());
    }
  }, [status, dispatch]);

  return (
    <div className=" flex items-center justify-center text-xl font-semibold text-center sm:text-left">
      <div>
        <img src={weather.current?.condition?.icon} alt="" />
      </div>
      <div>
        <p>{weather.current?.temp_c}°</p>
        <p>{weather.current?.condition?.text}</p>
      </div>
    </div>
  );
};
