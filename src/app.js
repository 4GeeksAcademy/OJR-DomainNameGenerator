/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjectives = ["wonderful", "small"];
  let noun = ["biker", "trucker"];
  let extensions = [".geeks", ".uk", ".mia", ".sky", ".yolo"];
  const bios = [];

  for (let index = 0; index < pronoun.length; index++) {
    for (let secondIndex = 0; secondIndex < adjectives.length; secondIndex++) {
      for (let thirdIndex = 0; thirdIndex < noun.length; thirdIndex++) {
        for (let fourthIndex = 0; fourthIndex < noun.length; fourthIndex++) {
          bios.push(
            `${pronoun[index]}${adjectives[secondIndex]}${noun[thirdIndex]}${extensions[fourthIndex]}`
          );
        }
      }
    }
  }
  console.log("List of Domain Names:");
  for (const bio of bios) {
    console.log(bio);
  }
};
