<div>
	<div>
		<h1 class="title display">Travel Save & Be Merry</h1>
		<div class="personas">
			<img alt="" src="Randi.png" />
			<img alt="" src="Tyler.png" />
		</div>

		<div class="about-us">
			<h2 class="display">About Us</h2>
			<p>
				Randi and Tyler walk through their experiences traveling, saving, and finding happiness,
				well, sorta, we just liked the domain name! We are currently slow traveling around
				Europe.
			</p>
		</div>

		<h2>TODO:</h2>
		<ul>
			<li>Ecap</li>
			<li>Cards</li>
			<li>Promo cards</li>
		</ul>
		<!-- <div class="cards">
				<Card v-for="post in posts.slice(0, 5)" :key="post.slug" :cardData="post" />
				<PromoCard class="card" tag="Colorado Hiking" />
			</div> -->

		<!-- <Ecap /> -->
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
		/* todo, make this responsive, perhaps absolute with left and right for randi and tyler respectively  */
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
