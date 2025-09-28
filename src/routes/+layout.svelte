<script> 
	//from layout template file
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();

	//make pages direct
	import { page } from '$app/state';
	import "./style.css";
	
	let pages = [
		{url: "./", title: "Home"},
		{url: "projects", title: "Projects"},
		{url: "contact", title: "Contact"},
		{url: "cv", title: "Resume"},
	];
	
	//--theme switcher - note: this does not work when the background is colored directly in CSS

	//node.js doesn't have local storage so we need to use gloabl object to get it
	let localStorage = globalThis.localStorage ?? {};

	//nullish coalescing operator: sets the variable colorSceme to the current light/dark state in local storage
	let colorScheme = $state(localStorage.colorScheme ?? "light dark");
	//create variable root to hold the html document
	//node.js has no document object so we have to get it through the global object using globalThis
	let root = globalThis?.document?.documentElement;
	//effect tells it to run every time we change to dropdown, the set property updates the colorscheme
	$effect(() => root?.style.setProperty("color-scheme", colorScheme));

	//add the current colorscheme to local storage on each change
	$effect(() => {
		localStorage.colorScheme = colorScheme;
	});	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="menu">
	{#each pages as p }
		<a href={p.url} class:current={ "." + page.route.id === p.url} target={ p.url.startsWith("http") ? "_blank" : null }>{ p.title }</a>
	{/each}
</nav>

<label class="color-scheme">
		Theme:
		<select bind:value={colorScheme}>
			<option>Light</option>
			<option>Dark</option>
		</select>
</label>

{@render children?.()} 