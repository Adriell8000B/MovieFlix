<section id="Banner">
	<div>
		<img src="https://m.media-amazon.com/images/I/91XKS5MN9uL._AC_UF894,1000_QL80_.jpg" alt="">
	</div>
</section>

<style lang="scss" scoped>
	#Banner {
		width: 100%;
		height: 550px;

		div {
			width: 100%;
			height: 100%;
			border-radius: 20px;
			overflow: hidden;

			&:hover {
				img {
					transform: scale(1.1);
				}
			}

			img {
				width: 100%;
				height: 100%;
				transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
		}
	}
</style>