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
//   agility + d10 highest has highest initiative, combatants ranked high to low.
