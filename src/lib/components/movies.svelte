<script lang="ts">
	import { onMount } from "svelte"
	import { filterMovie } from "$lib/stores/filterMovie"
	import { fade } from "svelte/transition"
	import type { Movie } from "$lib/types/movie"

	let movies:Array<Movie> = []
	let filteredMovies:Array<Movie> = []
	const API_URL = import.meta.env.VITE_API_URL

	$: {
		filteredMovies = movies.filter(movie =>
			movie.movie_name && typeof movie.movie_name === "string" &&
			movie.movie_name.toLowerCase().includes($filterMovie.toLowerCase())
		);
	}

	onMount(async () => {
		const response = await fetch(`${API_URL}/movies`)
		const data = await response.json()
		movies = data
	})
</script>

<section id="movies">
	{#if movies.length}
		{#each filteredMovies as movie}
			<div class="movie_card" in:fade="{{ duration: 500 }}">
				<div class="movie_banner">
					<img src={ movie.movie_banner } alt="">
					<button id="rating_button">
						<span><i class="fi fi-rr-star"></i></span>
						<span id="rating">{ movie.movie_rating }</span>
					</button>
					<button id="play">
						<svg width="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" pointer-events="none" role="img"><title>Media Player</title><path fill="var(--ci-primary-color, currentColor)" d="M444.4,235.236,132.275,49.449A24,24,0,0,0,96,70.072V434.214a24.017,24.017,0,0,0,35.907,20.839L444.03,276.7a24,24,0,0,0,.367-41.461ZM128,420.429V84.144L416.244,255.718Z" class="ci-primary"></path></svg>
					</button>
				</div>
				<div class="movie_description">
					<h3>{ movie.movie_name }</h3>
					<span>{ movie.movie_genre }</span>
					<span>{ movie.movie_year }</span>
				</div>
			</div>
		{/each}
	{/if}
	<div id="line"></div>
</section>

<style lang="scss" scoped>
	@media(min-width: 260px) { 
		#movies {
			position: relative;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(147px, 4fr));
			gap: 64px 30px;
			margin-bottom: 120px;

			.movie_card {
				height: 360px;
				cursor: pointer;
				transition: 0.3s ease;

				.movie_banner {
					height: 80%;
					border-radius: 20px;
					position: relative;
					overflow: hidden;
					margin-bottom: 12px;

					img {
						width: 100%;
						height: 100%;
						transition: 0.3s ease;
					}

					#rating_button {
						transition: 0.3s ease;
						opacity: 0;
						pointer-events: none;
						position: absolute;
						display: flex;
						align-items: center;
						top: 12px;
						right: 12px;
						padding: 4.5px 5px;
						color: var(--sky-blue);
						border-radius: 6px;
						background: var(--night-blue-2);
						font-size: 1.2rem;

						i {
							font-size: 1.4rem;
							display: flex;
							margin-right: 10px;
						}

						#rating {
							font-size: 1.1rem;
							color: var(--white);
							position: relative;
							bottom: -1px;
						}
					}

					#play {
						transition: 0.3s ease;
						pointer-events: none;
						opacity: 0;
						position: absolute;
						inset: 0;
						margin: auto;
						border: 1.5px solid var(--white);
						border-radius: 50%;
						width: 70px;
						height: 70px;
						display: flex;
						justify-content: center;
						align-items: center;
						backdrop-filter: blur(16px);

						svg {
							color: var(--white);
						}
					}
				}

				.movie_description {
					color: var(--white);

					h3 {
						font-size: 1.4rem;
						font-weight: 500;
					}

					span {
						--white: rgba(255, 255, 255, 0.891);
						color: var(--white);
						font-size: 0.8rem;
					}
				}

				&:hover {
					.movie_banner {
						img {
							filter: blur(5px);
							transform: scale(1.1);
						}

						#rating_button, #play {
							pointer-events: unset;
							opacity: 1;
						}
					}
				}
			}

			#line {
				--white: #ffffff1f;
				background-color: var(--white);
				position: absolute;
				bottom: -120px;
				width: 100%;
				height: 1.5px;
			}
		}
	}

	@media(min-width: 365px) {
		#movies {
			grid-template-columns: repeat(auto-fill, minmax(148px, 4fr));
		}
	}
</style>
