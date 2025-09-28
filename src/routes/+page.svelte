<svelte:head>
    <title>Home</title>
</svelte:head>
<main class="aboutMe">
    <h1>Kim Credit</h1>
    <p>MCHI Student at CMU, Class of 2026</p>
    <img src="images/IMG_01.jpg" alt="My Cat Helly">


    <!-- to read data from fetch in svelte, we need two nested await blocks - one for resposne and one for data -->

    {#await fetch("https://api.github.com/users/kimcredit") }
        <p>Loading...</p>
    {:then response}
        {#await response.json()}
            <p>Decoding...</p>
        {:then data}
            <section>
                <h2>My GitHub Stats</h2>
                <dl >
                    <dt>Followers</dt>
                    <dl>{data.followers}</dl>
                    <dt>Following</dt>
                    <dl>{data.following}</dl>
                    <dt>Public Repos</dt>
                    <dl>{data.public_repos}</dl>
                    <dt>Public Gists</dt>
                    <dl>{data.public_gists}</dl>
                </dl>
            </section>
            <!-- <p>The data is { JSON.stringify(data) }</p> -->
        {:catch error}
            <p class="error">
                Something went wrong: {error.message}
            </p>
        {/await}
    {:catch error}
        <p class="error">
            Something went wrong: {error.message}
        </p>
    {/await}

</main>