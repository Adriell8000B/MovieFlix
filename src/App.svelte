<script>
	// @ts-nocheck
	import { Router, Route } from "svelte-routing"
	import Home from "./pages/Home.svelte"
</script>

<Router>
	<main>
		<Route component={Home} path="/"/>
	</main>
</Router>

<style>
	main {
		width: 90%;
		margin: 0 auto;
	}
</style>