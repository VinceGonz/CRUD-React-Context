import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Dashboard = () => {
  const { name } = useContext(GlobalContext);
  return <h1>{name}</h1>;
};

export default Dashboard;
