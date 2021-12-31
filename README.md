## Weather Application

![NODE](https://place-hold.it/80x33/433/fff?text=NODE&bold)&nbsp;
![EXPRESS](https://place-hold.it/130x33/104/fff?text=EXPRESS&bold)&nbsp;
![HBS](https://place-hold.it/130x33/411/fff?text=HBS&bold)&nbsp;


## Description

This is a very basic application  implemented using Node.js and Express.js.In this project,two api used for fetching weather data.I removed my access token,please provide your access token for run the project.Here are the API websites that used for fetching data.

* [weatherstack.com](https://weatherstack.com/)
* [mapbox.com](https://www.mapbox.com/)


Whenever we Provided any country name,using mapbox API  we fetched latitude and longitude of that country then we used weatherstack API for fetching weather of that country.I used it but some other API is also available.

For rendering express.js views used hbs node module `Express.js view engine for handlebars.js`
* [hbs](https://www.npmjs.com/package/hbs)


Code snippet for giving path of hbs
```
//view path
const viewsDir = path.join(__dirname, "../templates");

//partials
const partialPaths = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialPaths);

app.set("view engine", "hbs");
app.set("views", viewsDir);

```


---

## How to Install and Run the Project


* Download or clone the project
* Change the directory using cd
* Install npm
* For run the project  `nodemon src/app.js -e js,hbs` 




---

