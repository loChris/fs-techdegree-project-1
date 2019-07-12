/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  This array holds objects which include the quote itself, who said it, and a general categorization of it.
  Also, if it applies, it holds the citation and year.
***/
var quotes = [{
    quote: 'All that we are is the result of what we have thought.',
    source: 'Buddha',
    tag: 'Inspirational'
  },
  {
    quote: 'No, I am your father.',
    source: 'Darth Vader',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    tag: 'Movie'
  },
  {
    quote: 'I have no special talent. I am only passionately curious.',
    source: 'Albert Einstein',
    tag: 'Inspirational'
  },
  {
    quote: 'It always seems impossible untils it\'s done.',
    source: 'Nelson Mandela',
    tag: 'Inspirational'
  },
  {
    quote: 'What are you lookin\' at, butthead?',
    source: 'Biff Tannen',
    citation: 'Back to the Future',
    year: 1985,
    tag: 'Movie'
  }
];



/*** 
  This function changes the background color of the html body
***/
function changeBackgroundColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = backgroundColor;
}



/***
  This function is in charge of generating a random number and according to 
  that number, it'll return a quote from the quotes array with all of its properties
***/
function getRandomQuote() {
  let generateRandomQuote = Math.floor(Math.random() * (5 - 0) + 0);
  return quotes[generateRandomQuote];
}



/***
  This function takes the quote "picked" by the getRandomQuote function
  and uses the existing classes in the .html file to replace their content with
  our quote AND it is also in charge of executing the changeBackgroundColor function
***/
function printQuote() {
  changeBackgroundColor();
  let randomQuote = getRandomQuote();
  let html = '';

  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>'
  }

  html += '</p>';
  html += '<p class="tag">' + randomQuote.tag + '</p>';

  let htmlObject = document.getElementById('quote-box');
  htmlObject.innerHTML = html;
}



/***
 this programs the button to listen for an event and 
 execute the function printQuote() accordingly
 ***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



/***
If the user doesn't click on the loadQuote button, 
this takes care of cycling through the quotes itself every 15 seconds
***/
setInterval(printQuote, 15000);
