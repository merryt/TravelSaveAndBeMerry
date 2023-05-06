<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<h1>Blog</h1>

{#each data.posts as post}
	<Card contents={post} />
{/each}

<h2>TODO:</h2>
<ul>
	<li>Responsive sizing and columns</li>
</ul>
