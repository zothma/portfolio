import { createContext } from "react";

export const TimelineAlignement = {
  droite: Symbol("droite"),
  gauche: Symbol("gauche")
}

const TimelineContext = createContext({
  parcouru: false,
  alignement: TimelineAlignement.droite
});

export default TimelineContext;