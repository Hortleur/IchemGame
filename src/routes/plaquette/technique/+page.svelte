<script>
    const title = "Maitriser les techniques essentielles de prise de parole en public. Les techniques pour réussir ses interventions en public"
    const pre = "Aucun prérequis"
    const pub = "Pouvoir s’exprimer avec aisance devant un auditoire est particulièrement utile dans le management. Cette formation s'adresse donc particulièrement aux cadres et dirigeants qui souhaitent développer leur impact à l'oral, Cela étant dit, ce type de formation peut être intéressant pour toute personne qui est amenée à communiquer régulièrement ou occasionnellement à l'oral."
    const objectif = "Maitriser les techniques essentielles de prise de parole en public\n" +
        "Maîtriser les techniques d'expression orale pour réussir tout type de prise de parole\n" +
        "Gagner en aisance à l'oral\n" +
        "Maîtriser son trac, les techniques de la voix et de la posture\n"
    const programme = [
        { "id": 1, "item": "Le cerveau" },
        { "id": 2, "item": "Objectifs" },
        { "id": 3, "item": "Les deux cerveaux" },
        { "id": 4, "item": "Le cerveau empathique" },
        { "id": 5, "item": "Les intelligences multiples" },
        { "id": 6, "item": "Le verbal - La structure" },
        { "id": 7, "item": "Le verbal - Le champ lexical" },
        { "id": 8, "item": "Le verbal - Les illustrations" },
        { "id": 9, "item": "Le verbal - Le storytelling" },
        { "id": 10, "item": "Le verbal - Les mots clefs" },
        { "id": 11, "item": "Le para-verbal - La voix" },
        { "id": 12, "item": "Le para-verbal - Le rythme" },
        { "id": 13, "item": "Le para-verbal - Les intentions" },
        { "id": 14, "item": "Le para-verbal - La respiration" },
        { "id": 15, "item": "Le para-verbal - La gestion des émotions" },
        { "id": 16, "item": "Le non-verbal - L'expression faciale" },
        { "id": 17, "item": "Le non-verbal - La posture" },
        { "id": 18, "item": "Le non-verbal - Les déplacements" },
        { "id": 19, "item": "Le non-verbal - La gestuelle" },
        { "id": 20, "item": "Le non-verbal - L'attitude" }
    ]
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
    h2{
        margin-left: 20px;
    }
    p{
        white-space: pre-wrap;
        width: 90%;
        margin: 0 30px;
    }
    div{
        margin: 20px 0;
    }
    ul{
        margin-left: 35px;
    }
    li{
        margin: 10px 0
    }
    .banner{
        background-image: url("$lib/assets/plaquette/parole.jpg");
        margin-top: 0;
    }
</style>