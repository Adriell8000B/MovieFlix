<script lang="ts">
  import { filterMovie } from "$lib/stores/filterMovie"

	let active_menu = false
  let input_text: string

	function toggleMenu(event: Event) {
    event.preventDefault()
		active_menu = !active_menu
	}

  function handleInput() {
    filterMovie.set(input_text.trim().replace(/\s+/g, " "))
  }
</script>

<header class={active_menu ? "active" : "hidden"}>
	<nav>
		<a href="/" id="logo">MovieFlix</a>
		<ul id="nav_list">
			<a href="/animes"><li>Animes</li></a>
			<a href="/series"><li>Series</li></a>
			<a href="/cartoons"><li>Cartoons</li></a>
		</ul>
		<button aria-label="open/close menu" id="hamburguer_button" class={ active_menu ? "active" : "" } on:click={ toggleMenu }>
			<div id="line1"></div>
			<div id="line2"></div>
			<div id="line3"></div>
		</button>
		<div id="search_box">
			<input type="text" placeholder="Search here" on:keyup={ handleInput } bind:value={ input_text }>
			<ion-icon name="search-outline"></ion-icon>
		</div>
	</nav>
</header>

{#if active_menu}
	<style>
		body { overflow-y: hidden; }
	</style>
{/if}

<style lang="scss" scoped>
	@media (min-width: 260px) {
		header {
			position: sticky;
			top: 0;
			z-index: 1;
			background-color: var(--night-blue-1);

			nav {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 8.4svh;

				#logo {
					font-size: 1.7rem;
					font-weight: 500;
					letter-spacing: 1px;
					background-image: linear-gradient(to right, var(--white) 66%, var(--sky-blue) 1%);
					background-clip: text;
					-moz-background-clip: text;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				#nav_list {
					position: absolute;
					top: 8.4svh;
					width: 100%;
					height: calc(100vh - 8.4svh);
					right: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1.2rem;
					transition: 0.3s ease;
					transform: translateX(100%);
					--night-blue-1: rgba(17, 23, 34, 0.95);
					background-color: var(--night-blue-1);
					
					li {
						position: relative;
						top: 80px;
						color: var(--white);
						font-size: 1.2rem;
						transition: 0.3s ease-in-out;
						-webkit-transition: 0.3s ease-in-out;
						-moz-transition: 0.3s ease-in-out;

						&:hover { color: var(--sky-blue); }

					}
				}

				#hamburguer_button {
					div {
						width: 32px;
						height: 2.2px;
						background: var(--white);
						transition: 0.3s ease;
						border-radius: 10px;

						&:nth-child(2) { margin: 8px 0; }
					}

					&.active {
						#line1 {transform: rotate(45deg) translate(8px, 8px);}
						#line2 {opacity: 0;}
						#line3 {transform: rotate(-45deg) translate(7px, -6px);}
					}
				}

				#search_box {
					position: absolute;
					top: 10svh;
					left: 50%;
					width: 90%;
					display: flex;
					align-items: center;
					transition: 0.3s ease;
					transform: translate(100%);

					input {
						width: 100%;
						background-color: var(--night-blue-2);
						padding: 8px 18px;
						border-radius: 20px;
						color: var(--white);
					}

					ion-icon {
						position: absolute;
						right: 10px;
						font-size: 1.5rem;
						color: var(--white);
					}
				}
			}

			&.active {
				nav {
					#nav_list { transform: translateX(0); }

					#search_box { transform: translateX(-50%); }
				}
			}
		}
	}

	@media(min-width: 880px) {
		header {
			nav {
				#logo { font-size: 2rem; }

				#nav_list {
					position: static;
					top: 0;
					height: unset;
					width: unset;
					flex-direction: row;
					transform: translateX(0);

					li {
						top: 0;
						font-size: 1rem;
					}
				}

				#hamburguer_button { display: none; }

				#search_box {
					width: 300px;
					position: static;
					inset: 0;
					transform: translateX(0);
					background: none;

					input { padding: 8px 18px; }
				}
			}
		}
	}
</style>