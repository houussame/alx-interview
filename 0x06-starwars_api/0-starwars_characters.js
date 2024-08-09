#!/usr/bin/node

const request = require('request');
<<<<<<< HEAD
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const film = JSON.parse(body);
  const characters = film.characters;
  printCharacters(characters, 0);
});

function printCharacters(characters, index) {
  if (index >= characters.length) return;
  request(characters[index], (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    const character = JSON.parse(body);
    console.log(character.name);
    printCharacters(characters, index + 1);
  });
}
=======

request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], function (err, res, body) {
  if (err) throw err;
  const actors = JSON.parse(body).characters;
  exactOrder(actors, 0);
});
const exactOrder = (actors, x) => {
  if (x === actors.length) return;
  request(actors[x], function (err, res, body) {
    if (err) throw err;
    console.log(JSON.parse(body).name);
    exactOrder(actors, x + 1);
  });
};
>>>>>>> be0ad926ccb664480f92d5fa23ef2a3220a43d97
