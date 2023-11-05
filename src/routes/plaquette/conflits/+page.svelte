<script>
    let title = "Mieux Gérer les émotions, le stress et les conflits. Techniques pour réguler ses émotions et réduire le risque de conflits";
    let pre = "Aucun prérequis";
    let pub = "Cette formation s'adresse à tous.";
    let objectif = "Objectifs de la formation Mieux Gérer les émotions, le stress et les conflits\n" +
        "Améliorer la maîtrise de ses émotions en situation de stress\n" +
        "Utiliser des méthodes de prévention et de gestion du stress\n" +
        "Utiliser ses émotions pour mieux communiquer avec les autres\n" +
        "Comprendre les mécanismes des conflits pour mieux les prévenir et les gérer\n";
    let programme = [
        {
            "id": 1,
            "item": {
                name: "Comprendre les émotions",
                itemlist: [
                    { id: 1, item: "Comprendre le rôle du cerveau" },
                    { id: 2, item: "Identifier les émotions" },
                    { id: 3, item: "Analyser ses propres émotions : l’intelligence émotionnelle, l’estime de soi, les émotions et la motivation" },
                    { id: 4, item: "Reconnaître le rôle des émotions" },
                    { id: 5, item: "Utiliser ses émotions" }
                ]
            }
        },
        {
            "id": 2,
            "item": {
                name: "Comprendre les mécanismes du stress",
                itemlist:[
                    { id: 1, item: "Qu’est-ce que le stress ? Ses causes et ses conséquences" },
                    { id: 2, item: "Où, quand, comment et pourquoi agit-il sur nous?" },
                    { id: 3, item: "Peut-on lutter efficacement contre le stress ?" },
                    { id: 4, item: "Quels sont les mécanismes en jeu ?" },
                    { id: 5, item: "Repérer ses « stresseurs » personnels" },
                    { id: 6, item: "Découvrir ses fonctionnements (et dysfonctionnements) corporels et émotionnels" }
                ]
            }
        },
        {
            "id": 3,
            "item": {
                name: "Développer son équilibre émotionnel",
                itemlist: [
                    { id: 1, item: "Développer sa conscience émotionnelle" },
                    { id: 2, item: "Vivre les émotions" },
                    { id: 3, item: "Gérer les réactions émotionnelles incohérentes" },
                    { id: 4, item: "Comprendre les bénéfices de la confiance" },
                    { id: 5, item: "Développer la confiance en soi" },
                    { id: 6, item: "Penser positif" },
                    { id: 7, item: "Respecter l’autre et son émotion" },
                    { id: 8, item: "Exprimer et partager son ressenti émotionnel" }
                ]
            }
        },
        {
            "id": 4,
            "item": {
                name: "Comprendre les dysfonctionnements émotionnels",
                itemlist: [
                    { id: 1, item: "Identifier les réactions incohérentes" },
                    { id: 2, item: "Comprendre les réactions incohérentes" },
                    { id: 3, item: "Repérer le rôle de ces réactions" },
                    { id: 4, item: "Améliorer l’efficacité de ces réactions" }
                ]
            }
        },
        {
            "id": 5,
            "item": {
                name: "Gérer son stress efficacement",
                itemlist: [
                    { id: 1, item: "Relaxation : évaluer la tension de son corps et maîtriser sa respiration pour être détendu et contrôler ses réactions physiques" },
                    { id: 2, item: "Pensée : modifier ses pensées pour mieux répondre aux situations stressantes" },
                    { id: 3, item: "Émotion : faire face à la pression de l’environnement en posant ses limites, exprimer ses besoins et ses demandes, oser faire des critiques objectives et savoir les accepter, savoir dire non" },
                    { id: 4, item: "Accroitre sa résistance au stress" }
                ]
            }
        },
        {
            "id": 6,
            "item": {
                name: "Connaitre les ingrédients d’un conflit",
                itemlist: [
                    { id: 1, item: "Les étapes vers le conflit" },
                    { id: 2, item: "Les indicateurs de passage vers le conflit" },
                    { id: 3, item: "Identifier les différents types de conflits" }
                ]
            }
        },
        {
            "id": 7,
            "item": {
                name: "Développer sa capacité à se maîtriser",
                itemlist: [
                    { id: 1, item: "Repérer les fondements de la maitrise de soi" },
                    { id: 2, item: "Apprendre à se maîtriser" },
                    { id: 3, item: "Gérer sa colère" },
                    { id: 4, item: "Faire face à la colère de l’autre" }
                ]
            }
        },
        {
            "id": 8,
            "item": {
                name: "Maîtriser les outils de la communication pour gérer un conflit",
                itemlist: [
                    { id: 1, item: "Savoir communiquer avec assertivité" },
                    { id: 2, item: "Savoir faire preuve d’empathie pour mieux communiquer et gérer un conflit" },
                    { id: 3, item: "Maîtriser l’écoute active et intégrer l’écoute passive dans une situation conflictuelle" },
                    { id: 4, item: "Note sur la communication non verbale : Le langage du corps" },
                    { id: 5, item: "Comprendre et intégrer la notion de proxémique" }
                ]
            }
        },
        {
            "id": 9,
            "item": {
                name: "Sortir d’un conflit",
                itemlist: [
                    { id: 1, item: "La critique constructive" },
                    { id: 2, item: "La posture du «tiers»" },
                    { id: 3, item: "Les clés de la méditation" }
                ]
            }
        }
    ];
</script>

<main>
    <div class="banner bg-cover bg-center mt-0 h-52 md:h-52 lg:h-60 xl:h-72 2xl:h-[500px] flex flex-col justify-end">
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
        background-image: url("$lib/assets/plaquette/conflit.jpg");
        margin-top: 0;
    }
</style>
