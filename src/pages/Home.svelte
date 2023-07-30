<script>
	import Navbar from "../lib/Navbar.svelte"
	import Banner from "../lib/Banner.svelte"
    import FilterNav from "../lib/FilterNav.svelte"
    import Movies from "../lib/Movies.svelte";
</script>

<section id="Home">
	<Navbar/>
	<Banner/>
	<FilterNav/>
	<Movies/>
</section>

<style lang="scss" scoped>
	@media (min-width: 280px) {
		#Home {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}
	}
</style>