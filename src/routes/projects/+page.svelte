<svelte:head>
    <title>Projects</title>
</svelte:head>
<h1> { projects.length } Projects </h1>

<script>
    import projects from '$lib/projects.json';
</script>

<div class="project-container">
{#each projects as p}

	<article class="projects">
		<h2>{p.title}</h2>
		<img src={p.image} alt="">
		<p>{p.description}</p>
	</article>


{/each}

</div>	