![image](https://github.com/FanMclaine/Fused-Startpage/assets/66262586/c82e1c98-6362-4952-9ea0-c50705e3ab1b)
![GitHub repo size](https://img.shields.io/github/repo-size/FanMclaine/Fused-Startpage?style=for-the-badge)

## 📇 Index

- [About](#-about)
- [Features](#-features)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Screenshots](#-screenshots)
- [Live Demo](#-live-demo)
- [Roadmap](#-roadmap)

## ℹ️ About

:toilet: **Hackable startpage built using vanilla HTML, CSS, and Javascript which makes it easier to customize (if you an IQ of over 100)**

## 🌟 Features

- 🖼️ **An image** that does nothing except to display your anime waifus
- 🍫 **Searchbar** using google
- ⏰ **Greeter** that greets you good morning and etc.
- ☁️ **Weather** API using openweathermap.org
- 🍮: **Bookmark** icons to your favorite sites (Youtube, Reddit, etc.)

## 📷 Screenshot(s) 

![image](https://github.com/FanMclaine/Fused-Startpage/assets/66262586/9dfb32eb-f6f5-4db6-b790-b31b2f17ec1c)
> Catppuccin logo from github.com/catppuccin/catppuccin

![image](https://github.com/FanMclaine/Startpage/assets/66262586/bf30c462-1722-4903-a7b8-01e8acbe3de4)

## 🧰 Configuration & Customization

**⚙️ Configuration:**
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

**🖌️ Customization:**
```css
/* _____________COLOR CUSTOMIZATION____________________ */
:root {
  --background-color: #181926;
  --card-background-color: #1e2030;
  --font-color: #cad3f5;
  --font-color2: #ffff;
  --links: silver; 
  --links-hover: navajowhite;
  --searchbar-border: #1d1f2e;
  --searchbar-focus: #3e3e3e;
  
  /* Bookmark links */
  --bookmark-icons: #535373;
  --link1: red; /* Youtube */
  --link2: orangered; /* Reddit */
  --link3: deepskyblue; /* Facebook */
  --link4: indianred; /* Revolt */
  --link5: whitesmoke; /*Github */
}
/* _______________END OF COLORS_____________________________*/
```

You have to edit index.html in order to add/remove/edit links.

## Usage
- **Firefox:**
  - Clone or download this repo
  - Host this using XAMPP, MAMPP or whatever as long as it uses `http://` or `https://`
  - Use [New Tab Overrider Plugin](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=recommended_fallback)
  <br>Or:<br>
  - edit mozilla.cfg or something

## 💿 Live Demo

You try out this startpage [here](https://fanmclaine.github.io/Fused-Startpage/)
> Note: The weather API does not display the real weather in the live demo as you need an api key for it to work.

## 🛣️ Roadmap

- [ ] use local storage thing to store api key so it can be used as a github pages site 
- [ ] a separate file for configs
- [x] themes and easier customizability of colors
- [ ] easier customizability of links
- [ ] make it more responsive
