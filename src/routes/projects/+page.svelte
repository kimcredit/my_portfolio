<svelte:head>
    <title>Projects</title>
</svelte:head>
<h1> { projects.length } Projects </h1>

<script>
    import projects from '$lib/projects.json';
	import Pie from '$lib/Pie.svelte';
</script>


<Pie />


<div class="project-container">
{#each projects as p}

	<article class="projects">
		<h2 class='titles'>{p.title}</h2>
		<img src={p.image} alt="">
		<div>
			<p>{p.description}</p>
			<p class='dates'>{p.year}</p>
		</div>
	</article>


{/each}

</div>	

