<script>
import StatBlock from '../components/StatBlock.svelte';
import Heading from '../components/Heading.svelte';
import PropertyLine from	'../components/PropertyLine.svelte';
import PropertyBlock from	'../components/PropertyBlock.svelte';
import TopStats from	'../components/TopStats.svelte';
import Abilities from	'../components/Abilities.svelte';

  let promise;
  const handleClick = () => {
    promise = fetch(
      "http://www.dnd5eapi.co/api/monsters/goblin"
    ).then((x) => x.json());
  };

		let creature = {
  "_id": "5e8b834e0b1bb138c54a5589",
  "index": "goblin",
  "name": "Goblin",
  "size": "Small",
  "type": "humanoid",
  "subtype": "goblinoid",
  "alignment": "neutral evil",
  "armor_class": 15,
  "hit_points": 7,
  "hit_dice": "2d6",
  "speed": {
    "walk": "30 ft."
  },
  "strength": 8,
  "dexterity": 14,
  "constitution": 10,
  "intelligence": 10,
  "wisdom": 8,
  "charisma": 8,
  "proficiencies": [
    {
      "name": "Skill: Stealth",
      "url": "/api/proficiencies/skill-stealth",
      "value": 6
    }
  ],
  "damage_vulnerabilities": [],
  "damage_resistances": [],
  "damage_immunities": [],
  "condition_immunities": [],
  "senses": {
    "darkvision": "60 ft.",
    "passive_perception": 9
  },
  "languages": "Common, Goblin",
  "challenge_rating": 0.25,
  "special_abilities": [
    {
      "name": "Nimble Escape",
      "desc": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
    }
  ],
  "actions": [
    {
      "name": "Scimitar",
      "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
      "attack_bonus": 4,
      "damage": [
        {
          "damage_type": {
            "name": "Slashing",
            "url": "/api/damage-types/slashing"
          },
          "damage_dice": "1d6",
          "damage_bonus": 2
        }
      ]
    },
    {
      "name": "Shortbow",
      "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
      "attack_bonus": 4,
      "damage": [
        {
          "damage_type": {
            "name": "Piercing",
            "url": "/api/damage-types/piercing"
          },
          "damage_dice": "1d6",
          "damage_bonus": 2
        }
      ]
    }
  ],
  "url": "/api/monsters/goblin"
}
const arrayify = (obj) => {
	return Object.entries(obj)
}
let proficiencies = arrayify(creature.proficiencies);
let senses = arrayify(creature.senses);
let special = arrayify(creature.special_abilities);

const abils = {
	str: creature.strength,
	dex: creature.dexterity,
	con: creature.constitution,
	int: creature.intelligence,
	wis: creature.wisdom,
	cha: creature.charisma
};
</script>

<svelte:head>
	<title>Basic Character Block</title>
</svelte:head>

<!-- <button on:click="{handleClick}">
  Click to grab Goblin
</button> -->

{#await promise}
<!-- optionally show something while promise is pending -->
{:then data}
<!-- promise was fulfilled -->
<StatBlock>
<Heading>
	<span slot="name">{creature.name}</span>
 <span slot="types">{creature.size} {creature.type}, {creature.subtype}, {creature.alignment}</span>
</Heading>

<TopStats>
	<PropertyLine>
	<span slot="prop">Armor Class</span>
 <span slot="val">{creature.armor_class}</span>
	</PropertyLine>
	<PropertyLine>
		<span slot="prop">Hit Points</span>
		<span slot="val">{creature.hit_points} ({creature.hit_dice})</span>
	</PropertyLine>
	<PropertyLine>
		<span slot="prop">Speed</span>
		<span slot="val">{creature.speed.walk}</span>
	</PropertyLine>
	<Abilities {...abils}>

	</Abilities>
	{#if creature.senses}
		{#each senses as sense , i}
			<PropertyLine>
			<span slot="prop">{sense[i, 0]}</span>
			<span slot="val">{sense[i, 1]}</span>
		</PropertyLine>
		{/each}
	{/if}
	{#if creature.proficiencies}
		{#each creature.proficiencies as skill}
			<PropertyLine>
			<span slot="prop">{skill.name}</span>
			<span slot="val">{skill.value}</span>
		</PropertyLine>
		{/each}
	{/if}
	<PropertyLine>
			<span slot="prop">Languages</span>
			<span slot="val">{creature.languages}</span>
		</PropertyLine>
			<PropertyLine>
			<span slot="prop">Challenge</span>
			<span slot="val">{creature.challenge_rating}</span>
		</PropertyLine>
</TopStats>

{#if creature.special_abilities}
{#each creature.special_abilities as ability}
	<PropertyBlock>
			<span slot="title">{ability.name}</span>
				<span slot="info">{ability.desc}</span>
	</PropertyBlock>
	{/each}
{/if}
<h3>Actions</h3>
{#if creature.actions}
{#each creature.actions as action}
	<PropertyBlock>
			<span slot="title">{action.name}</span>
				<span slot="info">
				{action.desc}
				</span>
	</PropertyBlock>
	{/each}
{/if}


</StatBlock>

{:catch error}
<!-- optionally show something while promise was rejected -->
{/await}

