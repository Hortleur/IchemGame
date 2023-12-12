<script>
    import Icon from "@iconify/svelte";
    let modules = [
        {
            id: 0,
            title: "Module 1: Se préparer à former",
            duration: 6,
            objectif: 'Se préparer à former',
            content: [
                {
                    id: 0,
                    contenu: "Chapitre 1 : Connaître les bases de l'ingénierie pédagogique"
                },
                {
                    id: 1,
                    contenu: "Chapitre 2 : Connaître les bases des neurosciences et de la psychologie de l'apprentissage"
                },
                {
                    id: 2,
                    contenu: "Chapitre 3 : Préparer et construire les documents permettant l'animation de la formation selon votre métier"
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
            title: "Module 2 : Préparer son action de formation",
            duration: 8,
            objectif: "Créer une formation sur mesure",
            content: [
                {
                    id: 0,
                    contenu: "Chapitre 1 : Préparer son action de formation"
                },
                {
                    id: 1,
                    contenu: "Chapitre 2 : L’analyse du besoin en formation"
                },
                {
                    id: 2,
                    contenu: "Chapitre 3 : La création du contenu de la formation"
                },
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
            title: "Module 3 : La création du contenu de la formation",
            duration: 8,
            objectif: "Démarrer l’action de formation",
            content: [
                {
                    id: 0,
                    contenu: "Chapitre 1 : L’accueil des participants et l’introduction de la formation"
                },
                {
                    id: 1,
                    contenu: "Chapitre 2 : Préparer son intervention : choix du lieu, disposition de la salle , outils..."
                },
                {
                    id: 2,
                    contenu: "Chapitre 3 : Les 5 étapes pour concevoir une séquence pédagogique"
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
            title: "Module 4: Conduire l’action de formation",
            duration: 6,
            objectif: "Savoir appliquer différentes méthodes d'animation",
            content: [
                {
                    id: 0,
                    contenu: "Chapitre 1 : L’animation d’une formation"
                },
                {
                    id: 1,
                    contenu: "Chapitre 2 : Les dynamiques de groupe"
                },
                {
                    id: 2,
                    contenu: "Chapitre 3 : Comprenez l'impact des différents types d'animations"
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
            id: 4,
            title: "Module 5 : Gérer les situations sensibles",
            duration: 8,
            objectif: "Savoir gérer une situation sensible",
            content: [
                {
                    id: 0,
                    contenu: "Chapitre 1 : La gestion de situations sensibles"
                },
                {
                    id: 1,
                    contenu: "Chapitre 2 : Les méthodes de gestions de conflits"
                },
                {
                    id: 2,
                    contenu: "Chapitre 3 : Différents types de difficultés d apprentissages"
                },
            ],
            pedago:[
                {
                    id: 0,
                    contenu: "Mise en situation et qcm"
                }
            ]
        },
        {
            id: 5,
            title: "Module 6 : Clôturer l’action de formation",
            duration: 6,
            objectif: "Mesurer l' atteintes des objectifs",
            content: [
                {
                    id: 0,
                    contenu: "Chapitre 1 : La réalisation des différents types d’évaluations"
                },
                {
                    id: 1,
                    contenu: "Chapitre 2 : La réalisation d’un questionnaire mesurant le retour sur investissement"
                },
                {
                    id: 2,
                    contenu: "Chapitre 3 : La mise en place d’une démarche d’amélioration continue"
                },
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
            <details class=" border-2 border-base-300 w-11/12 lg:w-5/12 rounded-md mx-auto my-4 py-2 px-3 shadow-md hover:cursor-pointer ">
                <summary class=" my-2 pl-2 font-semibold flex flex-col flex-nowrap justify-between items-center">
                    <div class=" flex flex-row flex-nowrap">
                        <h3 class=" text-accent mr-3">{mod.title}</h3>
                        <p>{mod.duration}h</p>
                    </div>
                    <Icon icon="tabler:chevron-down" width="24"/>
                </summary>
                <div>
                    <h3 class="font-bold">Objectif: {mod.objectif}</h3>
                </div>
                <div>
                    <ul class=" pl-4">
                        {#each mod.content as cont }
                        <li class=" list-item my-2">{cont.contenu}</li>
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

<style>
    details > summary {
        list-style: none;
    }

    details summary::-webkit-details-marker {
        display:none;
    }
</style>