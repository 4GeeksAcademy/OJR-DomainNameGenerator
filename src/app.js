/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { start } from "@popperjs/core";

window.onload = function() {
  //write your code here
  //   let pronoun = ["the", "our"];
  //   let adjectives = ["wonderful", "small"];
  //   let noun = ["biker", "trucker"];
  //   let extensions = [".geeks", ".uk", ".mia", ".sky", ".yolo"];
  //   const bios = [];

  //   for (let index = 0; index < pronoun.length; index++) {
  //     for (let secondIndex = 0; secondIndex < adjectives.length; secondIndex++) {
  //       for (let thirdIndex = 0; thirdIndex < noun.length; thirdIndex++) {
  //         for (let fourthIndex = 0; fourthIndex < noun.length; fourthIndex++) {
  //           bios.push(
  //             `${pronoun[index]}${adjectives[secondIndex]}${noun[thirdIndex]}${extensions[fourthIndex]}`
  //           );
  //         }
  //       }
  //     }
  //   }
  //   console.log("List of Domain Names:");
  //   for (const bio of bios) {
  //     console.log(bio);
  //   }
  // };

  const pronouns = ["the", "our"];
  const adjectives = ["wonderful", "small"];
  const nouns = ["biker", "trucker"];
  const extensions = [".geeks", ".uk", ".mia", ".sky", ".yolo"];
  const bios = [];

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun1 of nouns) {
        for (const noun2 of nouns) {
          for (const extension of extensions) {
            bios.push(`${pronoun}${adjective}${noun1}${noun2}${extension}`);
          }
        }
      }
    }
  }

  console.log("List of Domain Names:");
  for (const bio of bios) {
    console.log(bio);
  }
};
