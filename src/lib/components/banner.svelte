<section id="Banner">
	<div>
		<picture>
			<source media="(min-width: 870px)" srcset="https://th.bing.com/th/id/R.43b9e35f0f742d257587af83c4d463c8?rik=gHs1qxNYnTRteQ&pid=ImgRaw&r=0">
			<source media="(min-width: 650px)" srcset="https://m.media-amazon.com/images/S/pv-target-images/3a6a05ac69c3087112f6b1bb26190c4b92a13a741fdd560b7a90c0415a48ea6e._UR1920,1080_SX720_FMjpg_.jpg">
			<img src="https://m.media-amazon.com/images/I/91XKS5MN9uL._AC_UF894,1000_QL80_.jpg" alt="">
		</picture>
	</div>
</section>

<style lang="scss" scoped>
	@media(min-width: 260px) {
			#Banner {
				width: 100%;
				cursor: pointer;
				overflow: hidden;

			div {
				width: 100%;
				height: 100%;
				border-radius: 20px;
				overflow: hidden;

				&:hover {
					img { transform: scale(1.1); }
				}

				img {
					width: 100%;
					object-fit: fill;
					transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
				}
			}
		}
	}

	@media(min-width: 280px) {
		#Banner {
			height: 550px;
		}
	}

	@media(min-width: 870px) {
		#Banner {
			height: 500px;

			img { height: 170%; }
		}
	}
</style>