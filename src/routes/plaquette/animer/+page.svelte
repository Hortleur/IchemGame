<script>
    let title = "Animer une réunion. Préparer et conduire des réunions productives et participatives";
    let pre = "Aucun prérequis.";
    let pub = "Cette formation s'adresse à tous.";
    let objectif = "Objectifs de la formation Animer une réunion\n" +
        "Cerner les différents objectifs d’une réunion\n" +
        "Préparer et structurer efficacement une réunion\n" +
        "Adopter la bonne posture de l'animateur\n" +
        "Gérer les dynamiques de groupe\n";
    let programme = [
        {
            "id": 1,
            "item": {
                name: "La réunion",
                itemlist: [
                    { id: 1, item: "Vous êtes-vous déjà trouvé dans ce type de réunion ?" },
                    { id: 2, item: "Une réunion, qu’est-ce que c’est ?" },
                    { id: 3, item: "À quoi sert une réunion ?" },
                    { id: 4, item: "Quand faire une réunion ?" },
                    { id: 5, item: "Les indispensables d’une réunion" },
                    { id: 6, item: "Les étapes clés d’une réunion" },
                    { id: 7, item: "Écueils et obstacles à une bonne réunion" }
                ]
            }
        },
        {
            "id": 2,
            "item": {
                name: "L’animateur",
                itemlist:[
                    { id: 1, item: "Le rôle de l’animateur" },
                    { id: 2, item: "Les grandes phases d’intervention de l’animateur" },
                    { id: 3, item: "Les qualités de l’animateur" },
                    { id: 4, item: "Les différents styles d’animation" },
                    { id: 5, item: "Les secrets d’une bonne animation" }
                ]
            }
        },
        {
            "id": 3,
            "item": {
                name: "Communication et efficacité interpersonnelle",
                itemlist: [
                    { id: 1, item: "Gérer différents profils en réunion" },
                    { id: 2, item: "Les grands types de personnalité" },
                    { id: 3, item: "Les profils forts et parades" },
                    { id: 4, item: "Les clés de l’efficacité interpersonnelle" },
                    { id: 5, item: "Communiquer, c’est écouter" },
                    { id: 6, item: "Comment ne pas s’entendre" },
                    { id: 7, item: "Communiquer, c’est être en relation" },
                    { id: 8, item: "Écoute active" },
                    { id: 9, item: "Reformulation" },
                    { id: 10, item: "Questionnement" },
                    { id: 11, item: "Communiquer, en toute assertivité" },
                    { id: 12, item: "Faire et recevoir un feed-back" }
                ]
            }
        },
        {
            "id": 4,
            "item": {
                name: "Animer une réunion, les outils",
                itemlist: [
                    { id: 1, item: "Comment animer une réunion" },
                    { id: 2, item: "Ice breaker / Energizer" },
                    { id: 3, item: "Brainstorming" },
                    { id: 4, item: "Aide à la décision" },
                    { id: 5, item: "Rôles délégués" }
                ]
            }
        },
        {
            "id": 5,
            "item": {
                name: "Ça s’essouffle, que faire ?",
                itemlist: [
                    { id: 1, item: "Re-dynamiser une réunion, pourquoi ?" },
                    { id: 2, item: "Symptômes d’un auditoire éteint" },
                    { id: 3, item: "Re-dynamiser une réunion, comment ?" },
                    { id: 4, item: "L’effet de groupe, qu’est-ce que c’est ?" },
                    { id: 5, item: "Comment éviter l’influence du groupe" }
                ]
            }
        },
        {
            "id": 6,
            "item": {
                name: "Réunion à distance, quelques tips",
                itemlist: [
                    { id: 1, item: "Quand et comment organiser une réunion à distance ?" },
                    { id: 2, item: "Les points clés d’une réunion à distance" },
                    { id: 3, item: "Les points de vigilance d’une réunion à distance" }
                ]
            }
        }
    ];
</script>

<main>
    <div class="banner bg-cover bg-center mt-0 h-40 md:h-52 lg:h-60 xl:h-72 2xl:h-[500px] flex flex-col justify-end">
        <h1 class="text-center font-bold text-2xl xl:text-4xl bg-white bg-opacity-70 mb-4">{title}</h1>
    </div>
    <div class="">
        <h2 class="text-lg font-semibold">Pré-Requis</h2>
        <p class="">{pre}</p>
    </div>
    <div>
        <h2 class="text-lg font-semibold">Public</h2>
        <p>{pub}</p>
    </div>
    <div>
        <details class="ml-5">
            <summary class="text-lg font-semibold text-accent">Objectifs</summary>
            <p>{objectif}</p>
        </details>
    </div>
    <div>
        <details class="ml-5">
            <summary class="text-lg font-semibold text-accent">Programme</summary>
            <ul>
                {#each programme as prog}
                    <li>
                        <h3 class="font-semibold">{prog.id}. {prog.item.name}</h3>
                        <ul>
                            {#each prog.item.itemlist as iList}
                                <li>{iList.item}</li>
                            {/each}
                        </ul>
                    </li>
                {/each}
            </ul>
        </details>
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

    .banner{
        background-image: url("$lib/assets/plaquette/animer.jpg");
        margin-top: 0;
    }


</style>
