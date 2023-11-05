<script>
    let title = "Animer une formation en situation professionnelle";
    let pre = "Disposer d'une expertise métier sur laquelle animer une séquence de formation.\n" +
        "Une expérience professionnelle de 3 ans est souhaitée.\n";
    let pub = "La certification s’adresse à des professionnels détenant des compétences spécifiques à leurs métiers, et sollicités afin de transmettre leurs pratiques à des collègues, collaborateurs ou clients dans le cadre d’animation ponctuelle de formation.";
    let objectif = "Maitriser les techniques d’animation de formation en situation professionnelle afin d’assurer aux apprenants des applications directement opérationnelles\n" +
        "\n" +
        "Préparer l’action de formation\n" +
        "Démarrer l’action de formation\n" +
        "Conduire l’action de formation\n" +
        "Gérer les situations sensibles\n" +
        "Clôturer l’action de formation\n";
    let programme = [
        {
            "id": 1,
            "item": {
                name: "Module 1: Se préparer à former: 8h",
                itemlist: [
                    { id: 1, item: "Connaitre les bases de l'ingénierie pédagogique" },
                    { id: 2, item: "Connaitre les bases des neurosciences et de la psychologie de l'apprentissage" },
                    { id: 3, item: "Préparer et construire les documents permettant l'animation de la formation selon votre métier" },
                ],
                moyen_pedago:[
                    {
                        id:0, item:"Exercices pratiques et ateliers"
                    },
                    {id:1, item:"Atelier: Comprendre son fonctionnement en tant que formateur afin de créer un environnement stimulant"}
                ]
            }
        },
        {
            "id": 2,
            "item": {
                "name": "Module 2: Savoir organiser et structurer une action de formation",
                "itemlist": [
                    { "id": 1, "item": "Préparer et construire les documents permettant l'animation de la formation" },
                    { "id": 2, "item": "Savoir étudier la demande et construire un séquençage adapté" },
                    { "id": 3, "item": "Savoir définir des objectifs (taxonomie)" },
                    { "id": 4, "item": "Savoir créer ses outils facilement et les optimiser pour l'apprentissage" },
                    { "id": 5, "item": "Connaitre les piliers de la motivation, de l'apprentissage et de l'engagement pour un stagiaire" },
                    { "id": 6, "item": "Préparer son intervention : choix du lieu, disposition de la salle, outils..." },
                    { "id": 7, "item": "La formation en présentiel, en e-learning, à distance : quelles sont les spécificités et comment s'adapter ?" }
                ],
                "moyen_pedago": [
                    { "id": 0, "item": "Exercice : Concevoir / optimiser son programme et son scénario" }
                ]
            }
        },
        {
            "id": 3,
            "item": {
                "name": "Module 3: Adopter une posture de formateur et savoir démarrer une session",
                "itemlist": [
                    { "id": 1, "item": "Savoir se présenter et accueillir ses stagiaires" },
                    { "id": 2, "item": "Développer les qualités humaines du formateur (soft skills)" },
                    { "id": 3, "item": "Savoir créer une dynamique favorable, savoir animer un groupe" },
                    { "id": 4, "item": "Connaitre les différentes postures et les pièges à éviter" },
                    { "id": 5, "item": "Déceler les différents profils d'apprenants" },
                    { "id": 6, "item": "Connaitre les techniques permettant de créer des conditions favorables à l’interaction et à l’apprentissage" }
                ],
                "moyen_pedago": [
                    { "id": 0, "item": "Jeux de rôles et simulations" },
                    { "id": 1, "item": "Exercices en autonomie" }
                ]
            }
        },
        {
            "id": 4,
            "item": {
                "name": "Module 4: Mener et animer son action de manière efficace",
                "itemlist": [
                    { "id": 1, "item": "Analyser les attentes des stagiaires" },
                    { "id": 2, "item": "Connaitre les techniques de communication : CNV, communication non verbale/verbale, art oratoire" },
                    { "id": 3, "item": "Poser les bases d'une action, savoir motiver ses apprenants et gérer les baisses d'engagement" },
                    { "id": 4, "item": "Savoir gérer son timing" },
                    { "id": 5, "item": "Connaitre les techniques de la gestion de conflits" },
                    { "id": 6, "item": "Savoir traiter les objections et les situations particulières avec les apprenants (démotivation, absences répétées....)" }
                ],
                "moyen_pedago": [
                    { "id": 0, "item": "Simulations" }
                ]
            }
        },
        {
            "id": 5,
            "item": {
                "name": "Module 5: Savoir cloturer une action de formation",
                "itemlist": [
                    { "id": 1, "item": "Connaitre les outils pour évaluer une action de formation de manière cohérente" },
                    { "id": 2, "item": "Savoir s'auto-évaluer et demander des feedback constructifs" },
                    { "id": 3, "item": "Savoir créer des outils et des supports d'évaluation pour son programme" },
                    { "id": 4, "item": "Savoir mesurer le retour sur investissement" },
                    { "id": 5, "item": "Appréhender et prendre en compte la certification qualité" },
                    { "id": 6, "item": "Et après la formation ?" }
                ],
                "moyen_pedago": [
                    { "id": 0, "item": "Choisir ses KPI et concevoir ses supports d'évaluation" }
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
        <h2 class="text-lg font-semibold">Prérequis</h2>
        <p class=" text-xl">{pre}</p>
    </div>
    <div>
        <h2 class="text-lg font-semibold">Public</h2>
        <p>{pub}</p>
    </div>
    <div>
        <details class="ml-5">
            <summary class="text-lg font-semibold text-accent">
                Objectifs
            </summary>
            <p>{objectif}</p>
        </details>
    </div>
    <div>
        <details class="ml-5">
            <summary class="text-lg font-semibold text-accent">
                Programme
            </summary>
            <ul>
                {#each programme as prog}
                    <li>
                        <h3 class="font-semibold">{prog.id}. {prog.item.name}</h3>
                            <ul>
                                {#each prog.item.itemlist as iList}
                                    <li>{iList.item}</li>
                                {/each}
                            </ul>

                        <details>
                            <summary>Moyen Pédagogique</summary>
                            <ul>
                                {#each prog.item.moyen_pedago as moyen}
                                    <li>{moyen.item}</li>
                                {/each}
                            </ul>
                        </details>
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
