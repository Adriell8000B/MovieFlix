<script>
	import Navbar from "../lib/Navbar.svelte"
	import Banner from "../lib/Banner.svelte"
    import FilterNav from "../lib/FilterNav.svelte"
    import Movies from "../lib/Movies.svelte"
	import Category from "../lib/Category.svelte"
    import Series from "../lib/Series.svelte";
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