<script>
	import Ecap from '$lib/components/Ecap.svelte';
	import Card from '$lib/components/Card.svelte';
	import PromoCard from '$lib/components/PromoCard.svelte';
	export let data;
</script>

<div>
	<div>
		<h1 class="title display">Travel Save & Be Merry</h1>
		<div class="personas">
			<img alt="Randi's smiling face" src="Randi.png" />
			<img alt="Tyler's smiling face" src="Tyler.png" />
		</div>

		<div class="about-us">
			<h2 class="display">About Us</h2>
			<p>
				Randi and Tyler walk through their experiences traveling, saving, and finding happiness,
				well, sorta, we just liked the domain name! We are currently slow traveling around
				Europe.
			</p>
		</div>
		<div class="cards">
			{#each data.posts as post}
				<Card contents={post} />
			{/each}
			<PromoCard tag="Europe" />
		</div>
		<Ecap />
	</div>
</div>

<style>
	.title {
		font-size: 18vw;
		letter-spacing: -10px;
		width: 110%;
		overflow: hidden;
		margin-left: -5%;
		text-align: center;
		color: var(--green-2);
	}
	@media only screen and (max-width: 800px) {
		.title {
			font-size: 19.3vw;
		}
	}
	.personas {
		display: flex;
		justify-content: space-between;
		height: 300px;
		overflow: hidden;
		margin-top: -10vw;
	}
	.personas > img {
		align-self: start;
	}
	@media only screen and (max-width: 600px) {
		.personas {
			height: 150px;
		}
		.personas > img {
			height: 200px;
		}
		.title {
			font-size: 22vw;
		}
	}
	.about-us {
		background-color: var(--white);
		padding: 5% 20%;
		box-shadow: var(--shadowColor);
	}
	.about-us > h2 {
		font-size: 2em;
		color: var(--green-3);
	}
</style>
