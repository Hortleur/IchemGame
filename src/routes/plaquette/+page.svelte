<script>

    const formations = [
        {
            id:0,
            title:'Bilan de compétences',
            link:"/plaquette/bilan"
        },
        {
            id:1,
            title:'Maitriser les techniques essentielles de prise de parole en public Les techniques pour réussir ses interventions en public',
            link:"/plaquette/technique"
        },
        {
            id:2,
            title:'Organiser son quotidien professionnel pour gagner en efficacité et sérénité, Mieux gérer son temps et ses priorités',
            link:"/plaquette/temps"
        },
        {
            id:3,
            title:'Communication interpersonnelle, Communiquer efficacement en entreprise',
            link:"/plaquette/communiquer"
        },
        {
            id:4,
            title:'Animer une réunion, Préparer et conduire des réunions productives et participatives',
            link:"/plaquette/animer"
        },
        {
            id:5,
            title:'Mieux Gérer les émotions, le stress et les conflits, Techniques pour réguler ses émotions et réduire le risque de conflits',
            link:"/plaquette/conflits"
        },
        {
            id:6,
            title:'Mettre son leadership au service d’équipes, d’objectifs et de projets, Renforcer son leadership en toute situation',
            link:"/plaquette/leadership"
        },
        {
            id:7,
            title:"Etre efficace en télétravail, S'organiser, planifier, communiquer et maintenir le lien",
            link:"/plaquette/efficace"
        },
    ]
</script>

<main>
    <h1 class="text-2xl text-center my-8 font-bold">Plaquette de formations</h1>
    <div class=" flex flex-row flex-wrap">
        {#each formations as formation}
            <div class=" w-11/12 mx-auto h-60 grid place-items-center my-5 bg-blue-400 rounded-xl">
                <h2 class="text-black font-semibold text-lg text-center ">{formation.title}</h2>
                <a href={formation.link} class="btn btn-accent w-10/12 ">Voir Plus</a>
            </div>
        {/each}
    </div>
</main>