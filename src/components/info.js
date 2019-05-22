import React from "react";
import "./login.css";
import Button from "@material-ui/core/Button";
//import salt from './img/salt-chef.jpg'
import Recetas from "../recetas/recetas";
import MenuAppBar from "../components/navbar";
import RecipeReviewCard from "../components/InfoCard";

function Info() {
  return (
    <>
      <MenuAppBar />
      <RecipeReviewCard />
    </>
  );
}

export default Info;
