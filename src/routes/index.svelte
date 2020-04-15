<script>
  let promise;
  const handleClick = () => {
    promise = fetch(
      "http://www.dnd5eapi.co/api/monsters/goblin"
    ).then((x) => x.json());
  };
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<button on:click="{handleClick}">
  Click to grab Goblin
</button>

{#await promise}
<!-- optionally show something while promise is pending -->
{:then data}
<!-- promise was fulfilled -->
<pre>
    {JSON.stringify(data, null, 2)}
</pre>
{:catch error}
<!-- optionally show something while promise was rejected -->
{/await}


<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}


	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>