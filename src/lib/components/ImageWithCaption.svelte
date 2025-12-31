<script lang="ts">
	export let url: string;
	export let alt: string;

	export let caption: string;

	if (!caption) {
		caption = alt;
	}
</script>

<div class="image-with-container">
	<div class="image-with-caption">
		<img src={url} {alt} />
		<p>{caption}</p>
	</div>
</div>

<style>
	.image-with-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}
	.image-with-caption {
		padding: 10px;
		border-radius: 10px;
		border: 1px solid var(--green-2);
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.image-with-caption img {
		max-width: 100%;
		height: auto;
	}
	.image-with-caption p {
		margin-top: var(--small-margin);
	}
</style>
