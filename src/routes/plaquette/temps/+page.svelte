<script>
    let title = "Organiser son quotidien professionnel pour gagner en efficacité et sérénité";
    let pre = "Aucun prérequis, ce module s’adresse à tous.";
    let pub = "";
    let objectif = "Objectifs de la formation Organiser son quotidien professionnel pour gagner en efficacité et sérénité\n" +
        "Acquérir les grands principes et lois incontournables de l'organisation\n" +
        "Mettre en place un environnement de travail optimal\n" +
        "Définir des objectifs journaliers et hebdomadaires SMART\n" +
        "Classer les tâches urgentes et importantes et les prioriser\n" +
        "Planifier ses journées de manière efficace et sereine afin de gagner en productivité\n";
    let programme = [
        { "id": 1, "item": "La notion de temps" },
        { "id": 2, "item": "Pourquoi planifier sa journée ?" },
        { "id": 3, "item": "Identifier les « perturbateurs » du temps" },
        { "id": 4, "item": "Définir son environnement de travail idéal" },
        { "id": 5, "item": "Comment planifier efficacement avec la méthode GTD" },
        { "id": 6, "item": "Aller plus loin avec les horizons temporels" },
        { "id": 7, "item": "Deux nouveaux outils : NERAC et ALPEN" },
        { "id": 8, "item": "La matrice d’Eisenhower" },
        { "id": 9, "item": "Les règles incontournables" },
        { "id": 10, "item": "Multitâche ou monotâche" },
        { "id": 11, "item": "La concentration" },
        { "id": 12, "item": "La motivation" },
        { "id": 13, "item": "L’objectif SMART" },
        { "id": 14, "item": "Personnalité et productivité" },
        { "id": 15, "item": "Lutter contre la perfection" },
        { "id": 16, "item": "Améliorer sa communication" },
        { "id": 17, "item": "S’affirmer" },
        { "id": 18, "item": "Respecter les délais" },
        { "id": 19, "item": "Éviter la procrastination" },
        { "id": 20, "item": "Gérer son stress" },
        { "id": 21, "item": "Les outils collaboratifs, ennemis ou alliés ?" },
        { "id": 22, "item": "Espace de travail" },
        { "id": 23, "item": "Boîte mail et agenda" },
        { "id": 24, "item": "Mon équipe, mon alliée" },
        { "id": 25, "item": "L’art de déléguer" },
        { "id": 26, "item": "Trouver et garder le bon équilibre" },
        { "id": 27, "item": "Méthode" },
        { "id": 28, "item": "Conclusion" }
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
    .banner{
        background-image: url("$lib/assets/plaquette/temps.jpg");
        margin-top: 0;
    }
</style>
