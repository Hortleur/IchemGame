<script>
    let title = "Animer une réunion, Préparer et conduire des réunions productives et participatives";
    let pre = "";
    let pub = "";
    let objectif = "Objectifs de la formation Animer une réunion\n" +
        "Cerner les différents objectifs d’une réunion\n" +
        "Préparer et structurer efficacement une réunion\n" +
        "Adopter la bonne posture de l'animateur\n" +
        "Gérer les dynamiques de groupe\n";
    let programme = [
        { "id": 1, "item": "La réunion" },
        { "id": 2, "item": "L’animateur" },
        { "id": 3, "item": "Communication et efficacité interpersonnelle" },
        { "id": 4, "item": "Animer 1 réunion, les outils" },
        { "id": 5, "item": "Ça s’essouffle, que faire ?" },
        { "id": 6, "item": "Réunion à distance, quelques tips" }
    ];
</script>

<main>
    <h1 class="text-center font-bold text-2xl my-4">{title}</h1>
    <div class="">
        <h2 class="text-lg font-semibold">Pré-Requis</h2>
        <p class=" text-xl">{pre}</p>
    </div>
    <div>
        <h2 class="text-lg font-semibold">Public</h2>
        <p>{pub}</p>
    </div>
    <div>
        <h2 class="text-lg font-semibold">Objectifs</h2>
        <p>{objectif}</p>
    </div>
    <div>
        <h2 class="text-lg font-semibold">Programme</h2>
        <ul>
            {#each programme as prog}
                <li>{prog.id}. {prog.item}</li>
            {/each}
        </ul>
    </div>
</main>

<style>
    h2 {
        margin-left: 20px;
    }
    p {
        white-space: pre-wrap;
        width: 90%;
        margin: 0 30px;
    }
    div {
        margin: 20px 0;
    }
    ul {
        margin-left: 35px;
    }
    li {
        margin: 10px 0;
    }
</style>
