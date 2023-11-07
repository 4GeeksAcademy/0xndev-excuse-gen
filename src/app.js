/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["swimmer", "pilot", "teacher", "cat", "tree"];
  let action = [
    "took my",
    "crushed my",
    "blew up my",
    "yelled at my",
    "pushed my"
  ];
  let possetion = ["homework", "lunch", "car", "foot", "bag"];
  let where = [
    "in my house",
    "at the store",
    "on the roof",
    "next to the church",
    "at the school"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
