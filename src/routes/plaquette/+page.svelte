<script>
    import conflit from "$lib/assets/plaquette/conflit.jpg"
    import leader from "$lib/assets/plaquette/leader.jpg"
    import teletravail from "$lib/assets/plaquette/teletravail.jpg"
    import communication from "$lib/assets/plaquette/communication.jpg"
    import animer from "$lib/assets/plaquette/animer.jpg"
    import temps from "$lib/assets/plaquette/temps.jpg"
    import bilan from "$lib/assets/plaquette/bilan.jpg"
    import parole from "$lib/assets/plaquette/parole.jpg"
    import formation from "$lib/assets/plaquette/formation.jpg"
    import logo from "$lib/assets/logo.webp"

    const formations = [
        {
            id:0,
            title:'Bilan de compétences',
            link:"/plaquette/bilan",
            img: bilan
        },
        {
            id:1,
            title:'Maitriser les techniques essentielles de prise de parole en public Les techniques pour réussir ses interventions en public',
            link:"/plaquette/technique",
            img: parole
        },
        {
            id:2,
            title:'Organiser son quotidien professionnel pour gagner en efficacité et sérénité, Mieux gérer son temps et ses priorités',
            link:"/plaquette/temps",
            img: temps
        },
        {
            id:3,
            title:'Communication interpersonnelle, Communiquer efficacement en entreprise',
            link:"/plaquette/communiquer",
            img: communication
        },
        {
            id:4,
            title:'Animer une réunion, Préparer et conduire des réunions productives et participatives',
            link:"/plaquette/animer",
            img: animer
        },
        {
            id:5,
            title:'Mieux Gérer les émotions, le stress et les conflits, Techniques pour réguler ses émotions et réduire le risque de conflits',
            link:"/plaquette/conflits",
            img: conflit
        },
        {
            id:6,
            title:'Mettre son leadership au service d’équipes, d’objectifs et de projets, Renforcer son leadership en toute situation',
            link:"/plaquette/leadership",
            img: leader
        },
        {
            id:7,
            title:"Etre efficace en télétravail, S'organiser, planifier, communiquer et maintenir le lien",
            link:"/plaquette/efficace",
            img: teletravail
        },
        {
            id:8,
            title: "Animer une formation en situation professionnelle",
            link: "/plaquette/formation",
            img: formation
        }
    ]
</script>

<main>
    <header class="flex flex-row items-center justify-center md:gap-3 px-3 md:px-0">
        <figure class="w-20 block"><img src="{logo}" alt="logo" class=" rounded-full"></figure>
        <h1 class="text-2xl xl:text-4xl text-center my-8 font-bold">Plaquette de formations</h1>
    </header>
    <div class=" flex flex-row flex-wrap gap-7 mb-10 md:justify-evenly">
        {#each formations as formation}
            <div class=" card card-compact w-11/12 md:w-2/5 xl:w-1/4 mx-auto bg-base-200 shadow-xl">
                <figure class="h-fit"><img src="{formation.img}" alt="image {formation.title}" loading="lazy"></figure>
                <div class=" card-body">
                    <h2 class="card-title">{formation.title}</h2>
                    <div class="card-actions justify-center">
                        <a href={formation.link} class="btn btn-accent hover:btn-success lg:hover:animate-pulse">Voir Plus !</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <footer class="footer flex flex-col md:flex-row md:flex-wrap md:justify-evenly p-10 bg-base-200 text-base-content rounded">
        <div class="flex flex-col">
            <p class="text-lg font-semibold">Financement possible:</p>
            <ul>
                <li>Financement personnel</li>
                <li>OPCO</li>
                <li>Pôle Emploi</li>
                <li>Aides de la Région</li>
            </ul>
        </div>
        <div class="flex flex-col">
            <p class="text-lg font-semibold">Pour plus d'information(prix, plaquette pdf...):</p>
            <a href="mailto:contact@ichemgame.fr" class="underline ">contact@ichemgame.fr</a>
        </div>
    </footer>
</main>