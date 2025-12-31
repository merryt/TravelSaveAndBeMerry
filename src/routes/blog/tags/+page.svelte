<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<div class="container">
	<h1>Tags</h1>
</div>

<div class="cards">
	<ul>
		{#each data.tags as tag}
			<li><a href="/blog/tags/{tag}">{tag}</a></li>
		{/each}
	</ul>
</div>
