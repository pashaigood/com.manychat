import Chance from 'chance';

let chance = Chance(1);
let maxLevel = 3;
export default Array.from(Array(3).keys()).reduce(reduce, []);


function reduce(messages, index) {
  messages.push(generate(index));

  for (let i = 1; i < maxLevel; i++) {
    Array.from(Array((Math.floor(Math.random() * 3) + 1))).forEach(() => {
      messages.push(generate(index + 1, i));
    })
  }
  return messages;
}

function generate(index, level = 0) {
  return {
    datetime: Date.now() - index * 1000,
    avatar: chance.avatar({fileExtension: 'jpg'}),
    text: chance.sentence({words: (Math.floor(Math.random() * 20) + 10)}),
    name: chance.name(),
    level
  }
}
