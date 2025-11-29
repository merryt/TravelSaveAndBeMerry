<script lang="ts">
	interface CardData {
		path: string;
		meta: any;
	}

	export let contents: CardData;
</script>

<div class="card">
	<img class="card-img" alt={contents.meta.title} src={contents.meta.coverPhoto} />
	<a href={contents.path} class="display card-header-link">
		<h2 class="card-header">{contents.meta.title}</h2>
	</a>
	<p>{contents.meta.description}</p>
	<div class="card-authors">
		{#each contents.meta.authors as author}
			<div class="card-author-profile">
				<img alt={author} class="profile-img" src="/{author.toLowerCase()}-profile.png" />
				{author}
			</div>
		{/each}
	</div>
</div>

<style>
	.card-authors {
		display: flex;
	}
</style>
