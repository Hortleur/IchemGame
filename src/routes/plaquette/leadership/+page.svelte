<script>
    let title = "Mettre son leadership au service d’équipes, d’objectifs et de projets. Renforcer son leadership en toute situation";
    let pre = "Aucun prérequis";
    let pub = "Cette formation s'adresse à tous.";
    let objectif = "Objectifs de la formation Mettre son leadership au service d’équipes, d’objectifs et de projets\n" +
        "Construire son système de valeurs personnelles et professionnelles avec son propre style de leadership\n" +
        "Favoriser l’adhésion, en communiquant efficacement sa vision à une équipe\n" +
        "S’affirmer dans les situations difficiles\n" +
        "Élargir son leadership pour convaincre\n";
    let programme = [
        { "id": 1, "item": "Qu’est-ce que le leadership ?" },
        { "id": 2, "item": "Qu’est ce qui caractérise un leader ?" },
        { "id": 3, "item": "Développer la conscience de soi & son leadership : l’estime de soi" },
        { "id": 4, "item": "Développer la conscience de soi & son leadership : travailler ses forces" },
        { "id": 5, "item": "Développer la conscience de soi & son leadership : l’intelligence émotionnelle" },
        { "id": 6, "item": "Les caractéristiques d’un leader authentique" },
        { "id": 7, "item": "Chercher sa vocation pour devenir un leader authentique" },
        { "id": 8, "item": "Travailler ses valeurs pour devenir un leader authentique" },
        { "id": 9, "item": "Définir sa vision" },
        { "id": 10, "item": "Étude de cas : le discours de Martin Luther King" },
        { "id": 11, "item": "Formaliser sa vision" },
        { "id": 12, "item": "Développer sa communication & son écoute" },
        { "id": 13, "item": "Renforcer sa présence" },
        { "id": 14, "item": "Gérer son trac" },
        { "id": 15, "item": "L’impact de la posture du leader sur les équipes" },
        { "id": 16, "item": "Faire le point sur la gestion de l’intelligence collective" },
        { "id": 17, "item": "S’adapter au stade de maturité de votre équipe" },
        { "id": 18, "item": "Les secrets des équipes performantes" },
        { "id": 19, "item": "Les valeurs des équipes à un haut niveau d’intelligence collective" },
        { "id": 20, "item": "Créer une nouvelle culture pour son équipe" },
        { "id": 21, "item": "Construire une vision partagée avec son équipe" },
        { "id": 22, "item": "Les types d’énergie et de motivation au sein de son équipe" },
        { "id": 23, "item": "La puissance du feedback" },
        { "id": 24, "item": "La délégation de réunions" },
        { "id": 25, "item": "L’identification de situations de mauvaise communication" },
        { "id": 26, "item": "Comment se sortir du triangle dramatique" },
        { "id": 27, "item": "La méthode DEPA pour gérer les situations conflictuelles" },
        { "id": 28, "item": "Les différents types de changement" },
        { "id": 29, "item": "Le cycle du changement" },
        { "id": 30, "item": "Les enjeux du leader face au changement" },
        { "id": 31, "item": "Cartographier les acteurs pour s’entourer des bonnes personnes" },
        { "id": 32, "item": "Maintenir son rôle & sa posture" },
        { "id": 33, "item": "La généralisation" },
        { "id": 34, "item": "La stratégie du doute & les comparaisons" }
    ];
</script>

<main>
    <div class="banner bg-cover bg-center mt-0 h-40 md:h-52 lg:h-60 xl:h-72 2xl:h-[500px] flex flex-col justify-end">
        <h1 class="text-center font-bold text-2xl xl:text-4xl bg-white bg-opacity-70 mb-4">{title}</h1>
    </div>
    <div class="">
        <h2 class="text-lg font-semibold">Pré-Requis</h2>
        <p class=" text-xl">{pre}</p>
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
                    <li>{prog.id}. {prog.item}</li>
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
        background-image: url("$lib/assets/plaquette/leader.jpg");
        margin-top: 0;
    }
</style>
