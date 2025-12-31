<!-- __layout.svelte -->
<script>
	import '$lib/styles/style.css';
</script>

<div>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Montserrat:wght@100;400;700&display=swap"
		rel="stylesheet"
	/>

	<div class="navigation">
		<div class="logo display">
			<a href="/"> Travel Save & Be Merry</a>
		</div>
		<div class="nav-items">
			<a href="/">Home</a>
			<a href="/blog">Blog</a>
		</div>
	</div>

	<main>
		<slot />
	</main>
</div>

<style>
	.logo a {
		font-size: 24px;
		text-decoration: none;
		color: var(--green-3);
	}
	.navigation {
		width: 100%;
		padding: 10px;
		background: var(--white);
		display: flex;
		justify-content: space-between;
	}
	.nav-items > a {
		text-transform: uppercase;
		font-weight: 300;
		font-size: 24px;
		margin-left: 1rem;
		text-decoration: none;
		color: var(--blackish);
	}
</style>
