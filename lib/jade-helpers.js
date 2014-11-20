var helpers = function(){};
var data = require(__dirname + '/../src/_harp.json');

helpers.shuffle = function shuffle(array) {
  'use strict';

  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

helpers.randomize = function randomize(array) {
  'use strict';
  // console.log('randomizing');

  var counter = array.length, selection, whichone;

  whichone = Math.floor(Math.random() * counter);

  var selection = array[whichone];

  return selection;


};

helpers.character = function(str) {

  var params = str.split('-'),
      character = {
        name: params[0]
      },
      color = undefined;

  // color constructor
  if (params.length > 2 ) {
    color = params[1] + '-' + params[2];
  } else {
    color = params[1];
  }

  // color check
  for (var i = 0; i < data.globals.colors.length; i++) {
    if(data.globals.colors[i].name === color) {
      character.color = data.globals.colors[i];
    }
  }


  // get description
  for (var i = 0; i < data.globals.characters.length; i++) {
    if(data.globals.characters[i].name === character.name) {
      character.description = data.globals.characters[i].description;
    }
  }

  // if no character or color
  if ( character.description === undefined || character.color === undefined) {
    character = undefined;
    console.log("CHARACTER NOT FOUND!!!");
  }


  return character;


};

helpers.shareText = function(str, type) {
  if (type === 'twitter') {
    var newStr = str.split(' ').join('+');
  }
  return newStr;
};


module.exports = helpers;
