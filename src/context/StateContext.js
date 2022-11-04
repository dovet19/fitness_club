import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Context.Provider
      value={{
        exercises,
        setExercises,
        bodyPart,
        setBodyPart,
        currentPage,
        setCurrentPage,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
