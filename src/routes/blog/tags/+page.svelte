<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<div>WIP:Tags</div>
<div class="cards">
	{#each data.posts as post}
		<Card contents={post} />
	{/each}
</div>
