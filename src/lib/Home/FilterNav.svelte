<nav id="FilterNav">
	<select id="genres">
		<option value="all-genres">All genres</option>
		<option value="adventure">Adventure</option>
		<option value="action">Action</option>
		<option value="sci-fi">Sci-fi</option>
		<option value="horror">Horror</option>
		<option value="biography">Biography</option>
	</select>

	<select id="year">
		<option value="all-years">All years</option>
		<option value="2023">2023</option>
		<option value="2021-2022">2021-2022</option>
		<option value="2011-2020">2011-2020</option>
		<option value="2001-2010">2001-2010</option>
		<option value="1981-2000">1982-2000</option>
	</select>

	<select id="popularity">
		<option value="newest">Newest</option>
		<option value="featured">Featured</option>
		<option value="popular">Popular</option>
	</select>
</nav>

<style lang="scss" scoped>
	@media(min-width: 260px) {
		#FilterNav {
			background: var(--night-blue-2);
			width: 100%;
			border-radius: 16px;
			justify-content: space-evenly;
			padding: 20px 10px;
			display: flex;
			align-items: center;
			margin-bottom: 20px;

			select {
				color: var(--white);
				font-size: 0.75rem;
				text-align: center;

				option {
					background-color: var(--night-blue-1);
				}
			}
		}
	}

	@media(min-width: 325px) {
		#FilterNav > select {
			font-size: 0.9rem;
		}
	}
</style>