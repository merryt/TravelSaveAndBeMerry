<script>
	export let data;
	import Card from '$lib/components/Card.svelte';
	import { each } from 'svelte/internal';
	const secondCard = {
		path: '#',
		meta: {
			title: '123123',
			coverPhoto: 'Randi.png'
		}
	};
</script>

<article>
	<h3>todo</h3>
	<ul>
		<li>responsive images and images in general</li>
		<li>moments for dates</li>
		<li>promocard</li>
		<li>related posts if post has multiple tags</li>
	</ul>
	<img alt="" class="hero" src={data.coverPhoto} />
	<div class="blog-content">
		<div class="post-meta">
			{#each data.authors as author}
				<div class="author">
					<img alt={author} class="authorPhoto" src="/{author}.png" />
					<h3 class="blog-author_name display">
						{author}
					</h3>
				</div>
			{/each}
			<h3 class="blog-date display">
				Posted: {data.date}
				{#if data.updatedDate > 0}
					Updated:
					{data.updatedDate}
				{/if}
			</h3>
		</div>
		<h1 class="display blog-header">{data.title}</h1>
		<svelte:component this={data.content} />
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
	.blog p {
		margin-bottom: var(--small-margin);
		line-height: 1.6em;
	}
	.blog iframe {
		margin-bottom: var(--small-margin);
	}
	.blog img {
		max-width: 40%;
		margin: 0 auto;
		display: block;
	}
	.blog blockquote {
		border-left: 10px solid var(--green-1);
		padding-left: 30px;
	}
	.blog ul {
		margin-top: var(--small-margin);
		margin-bottom: var(--small-margin);
	}
</style>
