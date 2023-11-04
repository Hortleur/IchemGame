<script>
    let title = "Communication interpersonnelle. Communiquer efficacement en entreprise";
    let pre = "";
    let pub = "";
    let objectif = "Objectifs de la formation Communication interpersonnelle\n" +
        "Comprendre les mécanismes en jeu derrière la communication interpersonnelle\n" +
        "Apprendre et améliorer ses capacités d’intelligence émotionnelle\n" +
        "Améliorer l’efficacité de son relationnel\n" +
        "Déjouer les pièges des incompréhensions et des spirales émotionnelles négatives\n";
    let programme = [
        { "id": 1, "item": "La communication interpersonnelle" },
        { "id": 2, "item": "Le modèle de la communication à 3 dimensions (émetteur-récepteur-canal) et les potentiels filtres d’incompréhension" },
        { "id": 3, "item": "Communication : la meilleure posture à adopter" },
        { "id": 4, "item": "Adapter sa posture pour atteindre ses objectifs" },
        { "id": 5, "item": "Les 4 règles d’une communication efficace" },
        { "id": 6, "item": "L’intelligence émotionnelle ou IE comme fondation de la communication interpersonnelle" },
        { "id": 7, "item": "IE : que dit la science ?" },
        { "id": 8, "item": "L’IE prédit mieux la performance que le fameux QI – pourquoi ?" },
        { "id": 9, "item": "Techniques d’application de l’IE dans les échanges" },
        { "id": 10, "item": "Augmenter son IE" },
        { "id": 11, "item": "Conscience de soi : Prêter attention à son état intérieur" },
        { "id": 12, "item": "Savoir reconnaître les émotions" },
        { "id": 13, "item": "Pourquoi suis-je sensible aux émotions (ou pas) ?" },
        { "id": 14, "item": "Augmenter sa sensibilité émotionnelle" },
        { "id": 15, "item": "Exprimer ses émotions en contexte professionnel" },
        { "id": 16, "item": "Conscience sociale : Améliorer sa capacité à lire les émotions des collègues" },
        { "id": 17, "item": "Cultiver l’empathie" },
        { "id": 18, "item": "Comprendre Les déclencheurs émotionnels au travail" },
        { "id": 19, "item": "L’écoute attentive et sensible" },
        { "id": 20, "item": "Maîtrise de soi : Filtrer, maîtriser les émotions au travail" },
        { "id": 21, "item": "Comprendre les mécanismes mentaux" },
        { "id": 22, "item": "Être à l’écoute de ses émotions et communiquer" },
        { "id": 23, "item": "Optimiser son contrôle émotionnel" },
        { "id": 24, "item": "Gestion des relations : Apprendre à gérer les échanges difficiles" },
        { "id": 25, "item": "Résoudre une situation de conflit" },
        { "id": 26, "item": "La bonne communication managériale" },
        { "id": 27, "item": "Communiquer et cultiver son influence" }
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
        background-image: url("$lib/assets/plaquette/communication.jpg");
        margin-top: 0;
    }
</style>
