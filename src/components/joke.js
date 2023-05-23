import { JOKE_ID } from "./constants.js";

// TODO: Joke function
export const jokeProgramming = (jokeData) => {
   
    let jokeElement = document.getElementById(JOKE_ID);
     
      if (!jokeElement) {
      const element = document.createElement('div');
      element.id='joke';
      document.body.prepend(element); 
      }
  
      // TODO: animation
      const convertToHtml = (jokeData) => {
        let words = jokeData.joke.split(' ');
        let html = "<h3>\n";
        
        words.forEach((word, index) => {
          let animationDelay = (index * 0.1) + 0.1; 
        html += `<span style="animation: fade-in 0.8s ${animationDelay}s forwards cubic-bezier(0.11, 0, 0.5, 0);">${word}</span>\n`;
        });
        html += "</h3>\n";
        return html;
      }
  
      const htmlOutput = convertToHtml(jokeData);
  
      document.getElementById(JOKE_ID).innerHTML = htmlOutput;
  }
  