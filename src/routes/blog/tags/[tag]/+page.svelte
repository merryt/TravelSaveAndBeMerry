<script>
	export let data;
	import Card from '$lib/components/Card.svelte';
</script>

<div class="container">
	<h1>{data.params.tag}</h1>
	<p>There are {data.posts.length} posts tagged with {data.params.tag}</p>
</div>

<div class="cards">
	{#each data.posts as post}
		<Card contents={post} />
	{/each}
</div>
