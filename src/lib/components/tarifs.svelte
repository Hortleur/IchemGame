<script>
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
            title: "Formule 2"
        }
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
            </div>
        {/each}
    </div>
</section>