<script>
  import Navbar from "$lib/components/navbar.svelte"
  import Banner from "$lib/components/banner.svelte"
  import FilterNav from "$lib/components/filter_nav.svelte"
  import Movies from "$lib/components/movies.svelte"
  import Series from "$lib/components/series.svelte"
</script>

<main>
  <Navbar/>
  <Banner/>
  <FilterNav/>
  <Movies/>
  <Series/>
</main>

<style>
  main {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>