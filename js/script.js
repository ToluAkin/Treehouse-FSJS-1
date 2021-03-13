/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Youth, which is forgiven everything, forgives itself nothing: age, which forgives itself everything, is forgiven nothing.",
    source: "George Bernard Shaw",
    citation: "Maxims for Revolutionists",
    year: "1903",
    tags: "Youth"
  },
  {
    quote: "Possession is eleven points in the law.",
    source: "Colley Cibber",
    citation: "Woman's Wit, Act 1",
    year: "",
    tags: "Possessions"
  },
  {
    quote: "Almost everything: all external expectations, all pride all fear of embarrassment or failure. These tings just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: "2005",
    tags: "Fear"
  }, 
  {
    quote: "Cynicism is not realistic and tough. It's unrealistic and kind of cowardly because it means you don't have to try.",
    source: "Peggy Noonan",
    citation: "Good Housekeeping",
    year: "1950",
    tags: "Cynicism"
  },
  {
    quote: "It's going to come true like you knew it, but it's not going to feel like you think.",
    source: "Rosie O'Donnell",
    citation: "Today Show interview",
    year: "2008",
    tags: "Fame"
  },
  {
    quote: "Ya gotta live somewhere, but also you GET to live somewhere.",
    source: "John Green",
    citation: "VlogBrothers, A Poem for Spring",
    year: "2013",
    tags: "Home"
  },
  {
    quote: "I don't think it's good that we're perceived as different I think it's important we're perceived as MUCH BETTER. If being different is essential to doing that, then we have to do that, but if we could be much better without being different, that'd be fine with me. I want to be much better! I don't care about being different, but we'll have to be different in some ways to be much better.",
    source: "Steve Jobs",
    citation: "Apple WWDC Closing Keynote",
    year: "1997",
    tags: "Character"
  },
  {
    quote: "It's amazing how quickly nature consumes human places after we turn our backs on them. Life is a hungry thing.",
    source: "Scott Westerfeld",
    citation: "Peeps",
    year: "2005",
    tags: "Nature"
  },
  {
    quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy",
    source: "Norman Vincent Peale",
    citation: "",
    year: "",
    tags: "Confidence"
  },
  {
    quote: "The body is a sacred garment.",
    source: "Martha Graham",
    citation: "",
    year: "",
    tags: "Body"
  }
];

/***
 * randomNumber function
 *  generates a random number per time
 * 
 * Math.random() generates a random number between 0 & 1
 * Math.floor() rounds down a number to the nearest decimal
 * Multiplying num with Math.random() generates a number between ) & num
***/

let randomNumber = (num) => Math.floor(Math.random() * num)

/***
 * `getRandomQuote` function
 *  Using the randomNumber function to generate a number based on the length of the quotes
 *  The function gets the quote in a position, being that of the randomly generated number
 * 
***/

let getRandomQuote = () => {
  return quotes[randomNumber(quotes.length)]
}

/***
 * getRandomColor function
 * Using a random number generator to generate a random rgb color scheme
 * And setting the generated random color to the body of the page
 *
***/

let getRandomColor = () => {
  document.body.style.background = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`
}

/***
 * `printQuote` function
 *  The function adds the color and text to the page
***/
let printQuote = () => {  
  getRandomColor()
  let quote = getRandomQuote()
  
  html = `<p class="quote">${quote.quote}</p>`;
  html += `<p class="source">${quote.source}`;
  
  if (quote.citation !== "") {
    html += `<span class="citation">${quote.citation}, </span>`;
  }

  if (quote.tags !== "") {
    html += `<span class="tags"> ${quote.tags}</span>`;
  }
  
  if (quote.year !== "") {
    html += `<span class="year">${quote.year}</span></p>`;
  }
  

  document.getElementById('quote-box').innerHTML = html;
}

// Printing new quote to the page every 20 seconds
setInterval(printQuote, 20000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);