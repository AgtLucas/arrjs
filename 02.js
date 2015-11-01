// slice();
var person = {
  name: 'lucas-da-silva'
};

var filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';

var sections = input.split('|').map(x => x.trim());

console.log(sections);
