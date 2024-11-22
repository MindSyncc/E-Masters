import { useState, useEffect } from "react";
import { CalendarioStyle } from "../css/CalendarioStyle";

const Calendario = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const corridas = [
      { date: "13 Jan 2024", location: "Diriyah, Saudi Arabia" },
      { date: "27 Jan 2024", location: "Marrakesh, Morocco" },
      { date: "10 Feb 2024", location: "Mexico City, Mexico" },
      { date: "24 Feb 2024", location: "Cape Town, South Africa" },
      { date: "9 Mar 2024", location: "Santiago, Chile" },
      { date: "23 Mar 2024", location: "Sao Paulo, Brazil" },
      { date: "13 Apr 2024", location: "Rome, Italy" },
      { date: "27 Apr 2024", location: "Paris, France" },
      { date: "11 May 2024", location: "Monaco" },
      { date: "25 May 2024", location: "Berlin, Germany" },
      { date: "8 Jun 2024", location: "Jakarta, Indonesia" },
      { date: "22 Jun 2024", location: "Vancouver, Canada" },
      { date: "6 Jul 2024", location: "New York City, USA" },
      { date: "20 Jul 2024", location: "London, UK" },
      { date: "27 Jul 2024", location: "Seoul, South Korea" },
    ];
    setEvents(corridas);
  }, []);

  return (
    <CalendarioStyle className="margin-bottom-100">
      <div className="calendar-container">
        <h1>Calendário Fórmula E 2024</h1>
        <div id="calendar">
          {events.map((event, index) => (
            <div key={index} className="event">
              <h3>{event.date}</h3>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="comprar">
        <button id="comprar-ingresso">Comprar ingresso</button>
      </div>
    </CalendarioStyle>
  );
};

export default Calendario;
