<script lang="ts">
	let categories = [
		{category_name: "Action", category_number: 100, category_banner:"https://i0.wp.com/www.newsfilter.gr/wp-content/uploads/2017/05/john-wick-2-header-1.jpg?resize=1000%2C563"},
		{category_name: "Adventure", category_number: 80, category_banner: "https://cdn5.amcn.in/a/movies1.alle.bg/assets/cc798e22c2c8-w600-c999999999-v71b67cd449/ofaeoy942gfsfga1l6in5ml.jpg"},
		{category_name: "Animation", category_number: 60, category_banner: "https://1.bp.blogspot.com/-cejfjJmbPvE/U_RXUsrbhLI/AAAAAAAAAFA/46z39oj4Rgo/s1600/65D39A327DEAC31C5BFD7D7FBCC815.jpg"},
		{category_name: "Horror", category_number: 40, category_banner: "https://imgr.cineserie.com/2018/10/scream.png?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1"},
		{category_name: "Crime", category_number: 100, category_banner: "https://img.mensxp.com/media/content/2017/Dec/the-top-10-crime-thriller-movies-of-201710-1513772833.jpg"},
		{category_name: "Comedy", category_number: 80, category_banner: "https://th.bing.com/th/id/OIP.4mG9CPVqZ-HQ_ha52XKVQQHaEK?pid=ImgDet&rs=1"},
		{category_name: "Thriller", category_number: 60, category_banner: "https://img.mensxp.com/media/content/2019/Nov/some-lucky-person-got-to-see-the-now-iconic-joker-stairs-scene-in-real-time-1400x653-1573903692_1100x513.jpg"},
		{category_name: "Sci-fi", category_number: 40, category_banner: "https://th.bing.com/th/id/OIP.hCC9HY67Hxnvz-CBuhpSkAFMC7?pid=ImgDet&rs=1"}
	]
</script>

<section id="category">
	<h2>Categories</h2>

	<div id="categories">
		{#each categories as category}
			<div class="category_card">
				<img src={category.category_banner} alt="">
				<div class="category_description">
					<span>{category.category_name}</span>
					<span>{category.category_number}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss" scoped>
	@media(min-width: 280px) {
		#category {
			margin-bottom: 20px;
			h2 {
				text-align: left;
				color: var(--white);
				font-size: 1.5rem;
				margin-bottom: 20px;
			}

			#categories {
				gap: 30px;
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(250px, 4fr));

				.category_card {
					border-radius: 20px;
					overflow: hidden;
					height: 180px;
					position: relative;
					cursor: pointer;

					img {
						width: 100%;
						height: 100%;
						transition: 0.3s ease;
					}

					.category_description {
						position: absolute;
						display: flex;
						justify-content: space-between;
						padding: 0 20px;
						width: 100%;
						bottom: 16px;

						span {
							background: var(--night-blue-2);
							color: var(--white);
							border-radius: 12px;
							padding: 4px 8px;
							transition: 0.3s ease;
						}
					}

					&:hover {
						img {
							transform: scale(1.1);
						}

						.category_description > span{
							color: var(--dark-sky-blue);
						}
					}
				}
			}
		}
	}

	@media(min-width: 324px) {
		#category > #categories {
			grid-template-columns: repeat(auto-fill, minmax(270px, 4fr));
		}
	}
</style>