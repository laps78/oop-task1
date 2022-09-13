import Character from '../character';
import Bowman from '../bowman';

test('Character should create right character', () => {
  const character = new Character('testChar', 'Bowman');
  const testChar = {
    name: 'testChar',
    type: 'Bowman',
    level: 1,
    health: 100,
  };
  expect(character).toEqual(testChar);
});

test('Bowman should create character \'bowman\' with correct characteristics', () => {
  const bowman = new Bowman('Tom');
  const tom = {
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    name: 'Tom',
    type: 'Bowman',
  };

  expect(bowman).toEqual(tom);
});
