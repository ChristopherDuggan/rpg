const protagonist = {
	name: 'Mysterious Stranger',
	experience: 0,
	level: 1,
	attributes: [
	{strength: 1},
	{dexterity: 1},
	{stamina: 1},
	{charisma: 1},
	{will: 1},
	{perception: 1},
	{intelligence: 1},
	{wits: 1}],
	abilities: [
		{talents : [
			{alertness: 0},
			{athletics: 0},
			{brawl: 0},
			{dodge: 0},
			{empathy: 0},
			{expression: 0},
			{intimidation: 0},
			{legerdemain: 0},
			{subterfuge: 0}
		]},
		{skills: [
			{'animal ken': 0},
			{archery: 0},
			{trade: 0},
			{craft: 0},
			{melee: 0},
			{stealth: 0},
			{survival: 0}
		]},
		{knowledges: [
			{investigation: 0},
			{medicine: 0}
		]}
	],
	inventory: []
}


// Eperience Point Costs

/*Attribute = current rating  * 4
Existing Ability = current rating * 2
Specialty = Current Ability rating
new ability = 3
new magic = 10
primary magic path  = current level * 5
other magic path = current level * 7 */
