<script>
import {storedata} from '../components/stores.js';
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

const arrayify = (obj) => {
  return Object.entries(obj);
}
let senses = arrayify($storedata.senses);

const abils = {
	str: $storedata.strength,
	dex: $storedata.dexterity,
	con: $storedata.constitution,
	int: $storedata.intelligence,
	wis: $storedata.wisdom,
	cha: $storedata.charisma
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
	<span slot="name">{$storedata.name}</span>
 <span slot="types">{$storedata.size} {$storedata.type}, {$storedata.subtype}, {$storedata.alignment}</span>
</Heading>

<TopStats>
	<PropertyLine>
	<span slot="prop">Armor Class</span>
 <span slot="val">{$storedata.armor_class}</span>
	</PropertyLine>
	<PropertyLine>
		<span slot="prop">Hit Points</span>
		<span slot="val">{$storedata.hit_points} ({$storedata.hit_dice})</span>
	</PropertyLine>
	<PropertyLine>
		<span slot="prop">Speed</span>
		<span slot="val">{$storedata.speed.walk}</span>
	</PropertyLine>
	<Abilities {...abils}>

	</Abilities>
	{#if ($storedata.senses)}
		{#each senses as sense , i}
			<PropertyLine>
			<span slot="prop">{sense[i, 0].replace('_', ' ')}</span>
			<span slot="val">{sense[i, 1]}</span>
		</PropertyLine>
		{/each}
	{/if}
	{#if $storedata.proficiencies}
		{#each $storedata.proficiencies as skill}
			<PropertyLine>
			<span slot="prop">{skill.name}</span>
			<span slot="val">{skill.value}</span>
		</PropertyLine>
		{/each}
	{/if}
	<PropertyLine>
			<span slot="prop">Languages</span>
			<span slot="val">{$storedata.languages}</span>
		</PropertyLine>
			<PropertyLine>
			<span slot="prop">Challenge</span>
			<span slot="val">{$storedata.challenge_rating}</span>
		</PropertyLine>
</TopStats>

{#if $storedata.special_abilities}
{#each $storedata.special_abilities as ability}
	<PropertyBlock>
			<span slot="title">{ability.name}</span>
				<span slot="info">{ability.desc}</span>
	</PropertyBlock>
	{/each}
{/if}
<h3>Actions</h3>
{#if $storedata.actions}
{#each $storedata.actions as action}
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

