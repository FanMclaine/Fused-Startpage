# Fused-Startpage [WIP README]

:toilet: **Hackable startpage that tries to mimic popular startpages then fuse it into one? using only vanilla HTML, CSS, and Javascript**


![image](https://github.com/FanMclaine/Startpage/assets/66262586/93d0b2ef-f745-4c16-9206-d97677e45043)



## Features

- 🖼️ An image that does nothing except to display your anime waifus
- 🍫 Searchbar
- ⏰ Greeter that greets you good morning and etc.
- ☁️ Weather API using openweathermap.org
- 🍮: Quick Access icons to your favorite sites (Youtube, Reddit, etc.)
- 🎴 Additional Links in Cards

## Configuration

As of right now, you can only configure stuff like openweathermap api keys and city coordinates at the start of script.js
```js
// JSON CONFIG

const config = {
  "name": "uwu nyaaa >//< ", //Your name which will be used to greet you 
  "weather": [
    {
      "API_KEY": "q48tggq389g7b_yourApiKey", //Get one from openweathermap.org
      "City_Name": "London",          // get your city's latitude and longitude on https://openweathermap.org/find
      "latitude": "51.5085",   // Your City's latitude
      "longitude": "0.1257"    // Your City's longitude
    }
  ]
}

// Actual normal javascript
```

## Screenshot(s) 

![image](https://github.com/FanMclaine/Startpage/assets/66262586/bf30c462-1722-4903-a7b8-01e8acbe3de4)

## Live Demo

You can live demo this startpage [here](https://fanmclaine.github.io/fused-startpage)
> Note: The weather API doesn't work in the live demo as you need an api key for it to work.

## Installation

**Firefox:**
~~Idk, you figure it out~~ Instyall the New Tab Overrider plugin then... you know what to do right?
