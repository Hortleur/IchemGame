<script>
    import Icon from '@iconify/svelte';
    let tarifs = [
        {
            id: 0,
            price: 2500,
            description: "Full distanciel 42h de formation plus 1h30 de préparation individuel pour la certification devant le jury.",
            title: "Formule 1"
        },
        {
            id: 1,
            price: 3000,
            description: "Formule 1 + 1 week-end en présentiel à Strasbourg. (la nourriture et le logement sont offert) 2 nuits du vendredi au dimanche 17h.",
            title: "Formule 2",
            details: "Détail de l'offre dans les CGV"
        }
    ]

    let dates = [
        {
            id: 0,
            start: "19 Septembre",
            end: "27 Octobre"
        },
        {
            id: 1,
            start: "14 Novembre",
            end: "21 Décembre"
        },
        {
            id: 2,
            start: "16 Janvier",
            end: "22 Février"
        },
        {
            id: 3,
            start: "12 Mars",
            end: "18 Avril"
        },
        {
            id: 4,
            start: "14 Mai",
            end: "13 Juin"
        },
    ]
</script>

<section id="tarifs">
    <h2 class=" text-2xl font-bold text-center">Tarifs</h2>
    <div class=" lg:flex lg:flex-row lg:flex-nowrap lg:justify-around">
        {#each tarifs as tarif}
            <div class=" my-3 border-2 border-base-300 w-11/12 lg:w-5/12 mx-auto py-2 px-3 shadow-lg rounded-md">
                <h3 class=" font-semibold text-center">{tarif.title}</h3>
                <p class=" my-2">{tarif.description}</p>
                <p class=" text-lg font-bold text-accent text-center">{tarif.price}€</p>
                {#if tarif.details}
                    <span class=" italic font-extralight text-sm block text-center">{tarif.details}</span>
                {/if}
            </div>
        {/each}
    </div>
    <div class=" my-2">
        <p class=" text-center font-semibold">Financements possibles: OPCO, pôle emplois, aide de la région.</p>
    </div>
    <div class=" my-8">
        <h2 class=" font-semibold text-2xl text-center">Dates <span class=" text-sm font-normal"> (5 sessions/an) </span></h2>
        <div class=" flex flex-col flex-nowrap sm:flex-row sm:flex-wrap sm:justify-around gap-2">
            {#each dates as date}
                <div class=" flex flex-row flex-nowrap justify-center items-center gap-2 border-2 border-base-300 rounded-md w-4/5 sm:w-1/3 mx-auto px-1 py-3">
                    <p class=" flex flex-row flex-nowrap">{date.start}</p> <Icon icon="mdi:arrow-right-bold" /> <p class=" flex flex-row flex-nowrap">{date.end}</p>
                </div>
            {/each}
        </div>
    </div>
</section>