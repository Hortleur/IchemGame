<script>
    let title = "Etre efficace en télétravail, S'organiser, planifier, communiquer et maintenir le lien";
    let pre = "";
    let pub = "";
    let objectif = "Objectifs de la formation Etre efficace en télétravail\n" +
        "Clarifier son rapport au télétravail et organiser son planning\n" +
        "Gagner en efficacité grâce au télétravail.\n" +
        "Adapter sa communication pour maintenir le lien\n" +
        "Bien gérer son autonomie\n";
    let programme = [
        { "id": 1, "item": "Les enjeux : Avantages & Écueils à éviter" },
        { "id": 2, "item": "Le cadre Légal" },
        { "id": 3, "item": "Planifier son télétravail" },
        { "id": 4, "item": "Communiquer sur son organisation" },
        { "id": 5, "item": "Veiller à la confidentialité" },
        { "id": 6, "item": "Préparer son espace de Travail" },
        { "id": 7, "item": "S’équiper" },
        { "id": 8, "item": "Établir l’équilibre entre reporting & autonomie" },
        { "id": 9, "item": "Définir les attentes & limites de chacun" },
        { "id": 10, "item": "Circonscrire sa journée de travail" },
        { "id": 11, "item": "Organiser et séquencer sa journée en télétravail" },
        { "id": 12, "item": "Bien gérer son temps" },
        { "id": 13, "item": "Éviter la distraction & la procrastination" },
        { "id": 14, "item": "Gérer son énergie" },
        { "id": 15, "item": "Gérer sa disponibilité" },
        { "id": 16, "item": "Séparer vie pro & Vie perso" },
        { "id": 17, "item": "Créer la confiance & Soigner ses relations" },
        { "id": 18, "item": "Soigner sa communication avec ses collègues" },
        { "id": 19, "item": "Renforcer la confiance en télétravail" },
        { "id": 20, "item": "Éviter le piège des interprétations" },
        { "id": 21, "item": "Collaborer et partager l’information" },
        { "id": 22, "item": "Outils digitaux utiles en télétravail" },
        { "id": 23, "item": "Créer du lien autrement & lutter contre l'isolement" },
        { "id": 24, "item": "Manager les autres en télétravail" },
        { "id": 25, "item": "Garder confiance en soi en télétravail" },
        { "id": 26, "item": "Rester motivé en télétravail" },
        { "id": 27, "item": "Éviter le piège des interprétations" },
        { "id": 28, "item": "Se créer de nouvelles routines et habitudes" }
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
