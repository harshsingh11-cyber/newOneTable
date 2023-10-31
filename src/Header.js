import React, { useEffect, useState } from "react";
import "./Header.css";

// Custom hook to manage date and time
function useDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return dateTime;
}

function Header() {

  const dateTime = useDateTime();
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const hr = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();

  return (
    <div className="header_main">
      <div className="timer">
          <span>{year}</span>-<span>{month > 9 ? month : `0${month}`}</span>-
          <span>{date > 9 ? date : `0${date}`}</span>{" "}
          &nbsp; 
          <span>{hr > 9 ? hr:`0${hr}`}</span>:
          <span>{min > 9 ? min:`0${min}`}</span>:
          <span>{sec > 9 ? sec:`0${sec}`}</span>
      </div>
    </div>
  );
}

export default Header;
