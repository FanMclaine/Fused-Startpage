# 📟 Fused-Startpage [WIP README]

![image](https://github.com/FanMclaine/Startpage/assets/66262586/93d0b2ef-f745-4c16-9206-d97677e45043)

## 📇 Index

- [About]()
- [Features]()
- [Usage]()
- [Configuration]()
- [Screenshots]()
- [Live Demo]()
- [Roadmap]()

## ℹ️ About

:toilet: **Hackable startpage that tries to mimic popular startpages then fuse it into one? using only vanilla HTML, CSS, and Javascript**

## 🌟 Features

- 🖼️ **An image** that does nothing except to display your anime waifus
- 🍫 **Searchbar** using google
- ⏰ **Greeter** that greets you good morning and etc.
- ☁️ **Weather** API using openweathermap.org
- 🍮: **Bookmark** icons to your favorite sites (Youtube, Reddit, etc.)

## 🔻 Usage

**Firefox:**
- Clone or download this repo
- Host this using XAMPP, MAMPP or whatever as long as it uses `http://` or `https://`
- Use [New Tab Overrider Plugin](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=recommended_fallback)

## 🧰 Configuration

As of right now, configurations can be done at the start of script.js
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

You have to edit index.html in order to add/remove/edit links.

## 📷 Screenshot(s) 

![image](https://github.com/FanMclaine/Startpage/assets/66262586/bf30c462-1722-4903-a7b8-01e8acbe3de4)
![image](https://github.com/FanMclaine/Fused-Startpage/assets/66262586/9dfb32eb-f6f5-4db6-b790-b31b2f17ec1c)
> Catppuccin logo from github.com/catppuccin/catppuccin

## 💿 Live Demo

You try out this startpage [here](https://fanmclaine.github.io/Fused-Startpage/)
> Note: The weather API does not display the real weather in the live demo as you need an api key for it to work.

## 🛣️ Roadmap

- [ ] use local storage thing to store api key so it can be used as a github pages site 
- [ ] a separate file for configs
- [ ] themes and easier customizability of colors
- [ ] easier customizability of links
- [ ] make it more responsive
