
'use strict';

export const weekDayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];

export const monthNames = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic"
];


export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}


export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}


export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}


export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
    level: "Bueno",
    message: "La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo"
  },
  2: {
    level: "Aceptable",
    message: "La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber una preocupación moderada para la salud de un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire."
  },
  3: {
    level: "Moderado",
    message: "Los miembros de grupos sensibles pueden experimentar efectos en la salud. Es poco probable que la población en general se vea afectada."
  },
  4: {
    level: "Deficiente",
    message: "Todos pueden comenzar a experimentar efectos en la salud; los miembros de grupos sensibles pueden experimentar efectos más graves en la salud."
  },
  5: {
    level: "Muy Deficiente",
    message: "Advertencias de salud por condiciones de emergencia. Es más probable que toda la población se vea afectada."
  }
}