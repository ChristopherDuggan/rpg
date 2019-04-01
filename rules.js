const d10Roll = () => (Math.ceil(Math.random() * 10))

const char = {
  name: 'Mysterious Stranger',
  experience: 0,
  level: 1,
  attributes: {
    strength:2,
    agility: 4,
    toughness: 2
  },
  abilities: {
    attack: 2,
    block: 2,
    dodge: 4
  },
}

const strength = char.attributes.strength;
const agility = char.attributes.agility;
const attack = char.abilities.attack;
// console.log(str + atk )

const checkCrit = () => {
  console.log('checkCrit')
}
const rollAttack = (agility, attack) => {
  let successCount = [];
  for (let i = 0; i < agility + attack; i++)
  {
    successCount.push(d10Roll());
  };
  return successCount;
};

console.log(rollAttack(agility, attack));

// initiative:
//  Rolled at the start of each turn. Agility + d10 highest has highest initiative, goes first. Implement WoD style initiative later.

//Characters get 2 actions a turn. Options are attack, defense, inventory. Defense rolls are always done first everything else in initiative order.

//attack: roll (attack + agility) * d10 to hit. 5-9 is a success, 10 is 2 successes and qualifies for a crit check. each 1 reduces successes by 1, starting with the 10s. Total number of successes are tabulated, then reduced by opponents dodge (if dodge has been declared). If the total number of successes is greater than 0, it's a hit. If the total number is greater than 0 AND one of those successes is a 10, it's a 50% chance to be a critical hit.

//dodge: roll (dodge + agi) * d10, 6-10 are successes.

//calculating damage: Base damage is the character's strength. A weapon can add, +1, +2, +3, etc to that damage. (ex a character with 3 strength and a +1 weapon does 4 base damage.) Each success beyond the first on the toHit roll adds 1 more damage. For each damage, roll a d10. 6-10 is a success. Those successes are reduced by the person hit's (toughness + block) * d10 ( 6-10 successes) if they've blocked. Otherwise, just their toughness dice.
