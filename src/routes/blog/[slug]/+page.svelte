<script>
	export let data;
	import Card from '$lib/components/Card.svelte';
	import moment from 'moment';
</script>

<article>
	<h3>todo</h3>
	<ul>
		<li>moments for dates</li>
		<li>promocard</li>
		<li>related posts if post has multiple tags</li>
	</ul>
	<img alt="" class="hero" src={data.coverPhoto} />
	<div class="blog-content">
		<div class="post-meta">
			{#each data.authors as author}
				<div class="author">
					<img alt={author} class="authorPhoto" src="/{author.toLowerCase()}-profile.png" />
					<h3 class="blog-author_name display">
						{author}
					</h3>
				</div>
			{/each}
			<h3 class="blog-date display">
				<div>Posted: {moment(data.date).format('MMMM Do YYYY')}</div>
				{#if moment(data.updatedDate).format('MMMM Do YYYY') != moment(data.date).format('MMMM Do YYYY')}
					<div>
						Updated:
						{moment(data.updatedDate).format('MMMM Do YYYY')}
					</div>
				{/if}
			</h3>
		</div>
		<h1 class="display blog-header">{data.title}</h1>
		<div class="blog">
			<svelte:component this={data.content} />
		</div>
	</div>
</article>

<div class="cards">
	{#if data.related}
		{#each data.related as post}
			<Card contents={post} />
		{/each}
	{/if}
	<!-- add promo card -->
	<!-- <PromoCard class="card" tag="Photography"></PromoCard> -->
</div>

<style>
	.hero {
		object-fit: cover;
		width: 100%;
		height: 200px;
		margin-bottom: -4px;
	}
	.post-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.author {
		display: flex;
		align-items: center;
	}
	.authorPhoto {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 10px;
	}
	.blog-author_name,
	.blog-date {
		color: var(--blackish);
		font-size: 2rem;
	}
	.blog-header {
		font-size: 4rem;
		color: var(--green-2);
	}
	.blog-content {
		background-color: var(--white);
		padding: var(--small-margin) 10% var(--large-margin) 10%;
		margin-top: 0;
	}
</style>
