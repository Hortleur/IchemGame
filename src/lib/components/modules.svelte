<script>
    import Icon from "@iconify/svelte";
    let modules = [
        {
            id: 0,
            title: "Module 1: Se préparer à former",
            duration: 8,
            content: [
                {
                    id: 0,
                    contenu: "Connaitre les bases de l'ingénierie pédagogique"
                },
                {
                    id: 1,
                    contenu: "Connaitre les bases des neurosciences et de la psychologie de l'apprentissage"
                },
                {
                    id: 2,
                    contenu: "Préparer et construire les documents permettant l'animation de la formation selon votre métier"
                }
            ],
            pedago:[
                {
                    id: 0,
                    contenu: "Exercices pratiques et ateliers"
                },
                {
                    id: 1,
                    contenu: "Atelier: Comprendre son fonctionnement en tant que formateur afin de créer un environnement stimulant"
                },
            ]
        },
        {
            id: 1,
            title: "Module 2: Savoir organiser et structuré une action de formation",
            duration: 8,
            content: [
                {
                    id: 0,
                    contenu: "Préparer et construire les documents permettantl'animation de la formation"
                },
                {
                    id: 1,
                    contenu: "Savoir étudier la demande et construire un séquençage adapté"
                },
                {
                    id: 2,
                    contenu: "Savoir définir des objectifs (taxonomie)"
                },
                {
                    id: 3,
                    contenu: "Savoir créer ses outils facilement et les optimiser pourl'apprentissage"
                },
                {
                    id: 4,
                    contenu: "Connaitre les piliers de la motivation, de l'apprentissage et de l'engagement pour un stagiaire"
                },
                {
                    id: 5,
                    contenu: "Préparer son intervention : choix du lieu, disposition de la salle , outils..."
                },
                {
                    id: 6,
                    contenu: "La formation en présentiel, en e-learning, à distance : quelles sont les spécificités et comment s'adapter ?"
                }
            ],
            pedago:[
                {
                    id: 0,
                    contenu: "Exercice : Concevoir / optimiser son programme et son scénario"
                }
            ]
        },
        {
            id: 2,
            title: "Module 3: Adopter une posture de formateur et savoir démarrer une session",
            duration: 8,
            content: [
                {
                    id: 0,
                    contenu: "Savoir se présenter et accueillir ses stagaires"
                },
                {
                    id: 1,
                    contenu: "Développerles qualités humaines du formateur(soft skills)"
                },
                {
                    id: 2,
                    contenu: "Savoir créer une dynamique favorable , savoir animer un groupe"
                },
                {
                    id: 3,
                    contenu: "Connaitre les différentes postures et les pièges à éviter"
                },
                {
                    id: 4,
                    contenu: "Décelerles différents profils d'apprenants"
                },
                {
                    id: 5,
                    contenu: "Connaitre les techniques permettant de créer des conditions favorables à l’interaction et à l’apprentissage"
                }
            ],
            pedago:[
                {
                    id: 0,
                    contenu: "Jeux de rôles et simulations"
                },
                {
                    id: 1,
                    contenu: "Exercices en autonomie"
                },
            ]
        },
        {
            id: 3,
            title: "Module 4: Mener et animer son action de manière efficace",
            duration: 6,
            content: [
                {
                    id: 0,
                    contenu: "Analyserles attentes des stagiaires"
                },
                {
                    id: 1,
                    contenu: "Connaitre les techniques de communication : CNV , communication non verbale/verbale, art oratoire"
                },
                {
                    id: 2,
                    contenu: "Poser les bases d'une action et savoir motiver ses apprenants et gérer les baisses d'engagement"
                },
                {
                    id: 3,
                    contenu: "Savoir gérer son timing"
                },
                {
                    id: 4,
                    contenu: "Connaitre les techniques de la gestion de conflits"
                },
                {
                    id: 5,
                    contenu: "Savoir traiter les objections et les situations particulières avec les apprenants (démotivation , absences répétées....)"
                }
            ],
            pedago:[
                {
                    id: 0,
                    contenu: "Simulations"
                }
            ]
        },
        {
            id: 3,
            title: "Module 5: Savoir cloturer une action de formation",
            duration: 6,
            content: [
                {
                    id: 0,
                    contenu: "Connaitre les outils pour évaluer une action de formation de manière cohérente"
                },
                {
                    id: 1,
                    contenu: "Savoir s'auto évaluer et demander des feedback constructifs"
                },
                {
                    id: 2,
                    contenu: "Savoir créer des outils et des supports d'évaluation pour son programme"
                },
                {
                    id: 3,
                    contenu: "Savoir mesurerle retour surinvestissement"
                },
                {
                    id: 4,
                    contenu: "Appréhender et prendre en compte la certification qualité"
                },
                {
                    id: 5,
                    contenu: "Et après la formation ?"
                }
            ],
            pedago:[
                {
                    id: 0,
                    contenu: "Choisir ses KPI et concevoir ses supports d'évaluation"
                }
            ]
        },
    ]
    </script>
    
    <section class=" mt-8">
        <div id="modules" class=" h-20"></div>
        <h2 class=" text-2xl font-bold text-center">Programme de Formation</h2>
        <div class=" lg:flex lg:flex-col lg:flex-nowrap lg:justify-around">
            {#each modules as mod}
            <details class=" border-2 border-base-300 w-11/12 lg:w-5/12 rounded-md mx-auto my-4 py-2 px-3 shadow-md hover:cursor-pointer">
                <summary class=" my-2 pl-2 font-semibold flex flex-col flex-nowrap justify-between items-center">
                    <div class=" flex flex-row flex-nowrap">
                        <h3 class=" text-accent mr-3">{mod.title}</h3>
                        <p>{mod.duration}h</p>
                    </div>
                    <Icon icon="tabler:chevron-down" width="24"/>
                </summary>
                <div>
                    <ul class=" pl-4">
                        {#each mod.content as cont }
                        <li class=" list-disc list-item my-2">{cont.contenu}</li>  
                        {/each}
                    </ul>
                </div>
                <div>
                    <h3 class=" font-semibold">Moyens pédagogiques :</h3>
                    {#each mod.pedago as peda}
                        <ul>
                            <li class=" list-item my-2">- {peda.contenu}</li>
                        </ul>
                    {/each}
                </div>
            </details>  
            {/each}
        </div>
</section>