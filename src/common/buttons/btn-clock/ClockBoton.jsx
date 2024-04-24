import { useState, useEffect } from "react";

function ClockBoton() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const horaActual = hora.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const amPm = hora.getHours() < 12 ? "AM" : "PM";

  return (
    <div>
      {horaActual} {amPm}
    </div>
  );
}

export default ClockBoton;
