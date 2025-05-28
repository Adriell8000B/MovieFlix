<script lang="ts">
	const series = [
		{ serie_title: "Squid Game Season 1 Episode 2: Hell", serie_banner: "https://th.bing.com/th/id/OIP.yfw9meWErAX8dYU0EeW2iAHaEK?pid=ImgDet&rs=1" },
		{ serie_title: "The Good Doctor Season 2 Episode 18: Trampoline", serie_banner: "https://th.bing.com/th/id/OIP.TrB-ShO-cgxBjvQRxsTaiwHaEK?pid=ImgDet&rs=1" },
		{ serie_title: "The Last of Us Season 1 Episode 6: Kin", serie_banner: "https://meups.com.br/wp-content/uploads/2022/12/The-Last-of-Us-da-HBO.jpg" }
	]
</script>

<section id="series">
	<h2>Series</h2>

	<div id="series_grid">
	{#each series as serie}
		<div class="serie_card">
			<div class="serie_banner">
				<img src={serie.serie_banner} alt="">
			</div>
			<div class="serie_description">
				<h3>{serie.serie_title}</h3>
			</div>
		</div>
		{/each}
	</div>
</section>

<style lang="scss" scoped>
	@media(min-width: 260px) {
		#series {
			h2 {
				font-size: 1.5rem;
				color: white;
				margin-bottom: 20px;
			}

			#series_grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(340px, 4fr));
				gap: 30px;

				.serie_card {
					cursor: pointer;
					height: 300px;
					margin-bottom: 30px;
					
					.serie_banner {
						width: 100%;
						height: 80%;
						overflow: hidden;
						border-radius: 20px;
						margin-bottom: 12px;

						img {
							width: 100%;
							height: 100%;
							transition: 0.3s ease;
						}
					}

					.serie_description {
						h3 {
							font-size: 1.4rem;
							color: white;
							font-weight: 500;
						}
					}

					&:hover {
						.serie_banner img {
							transform: scale(1.1);
						}
					}
				}
			}
		}
	}

	@media(min-width: 380px) {
		#series > #series_grid {
			grid-template-columns: repeat(auto-fill, minmax(280px, 4fr));
		}
	}

	@media(min-width: 900px) {
		#series > #series_grid {
			grid-template-columns: repeat(auto-fill, minmax(330px, 4fr));
		}
	}
</style>