<script>
    let title = "Mieux Gérer les émotions, le stress et les conflits, Techniques pour réguler ses émotions et réduire le risque de conflits";
    let pre = "";
    let pub = "";
    let objectif = "Objectifs de la formation Mieux Gérer les émotions, le stress et les conflits\n" +
        "Améliorer la maîtrise de ses émotions en situation de stress\n" +
        "Utiliser des méthodes de prévention et de gestion du stress\n" +
        "Utiliser ses émotions pour mieux communiquer avec les autres\n" +
        "Comprendre les mécanismes des conflits pour mieux les prévenir et les gérer\n";
    let programme = [
        { "id": 1, "item": "Comprendre les émotions" },
        { "id": 2, "item": "Comprendre les mécanismes du stress" },
        { "id": 3, "item": "Développer son équilibre émotionnel" },
        { "id": 4, "item": "Comprendre les dysfonctionnements émotionnels" },
        { "id": 5, "item": "Gérer son stress efficacement" },
        { "id": 6, "item": "Connaitre les ingrédients d’un conflit" },
        { "id": 7, "item": "Développer sa capacité à se maîtriser" },
        { "id": 8, "item": "Maîtriser les outils de la communication pour gérer un conflit" },
        { "id": 9, "item": "Sortir d’un conflit" }
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
