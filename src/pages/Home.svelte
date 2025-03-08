<script>
	import Navbar from "../lib/Home/Navbar.svelte"
	import Banner from "../lib/Home/Banner.svelte"
    import FilterNav from "../lib/Home/FilterNav.svelte"
    import Movies from "../lib/Home/Movies.svelte"
	import Category from "../lib/Home/Category.svelte"
    import Series from "../lib/Home/Series.svelte"
</script>

<section id="Home">
	<Navbar/>
	<Banner/>
	<FilterNav/>
	<Movies/>
	<Category/>
	<Series/>
</section>

<style lang="scss" scoped>
	@media (min-width: 280px) {
		#Home {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}
</style>