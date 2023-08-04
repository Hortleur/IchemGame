<script>
    import asso from '$lib/assets/partners/asso_appart.webp';
    import bain from '$lib/assets/partners/bain.webp';
    import eg from '$lib/assets/partners/eg.webp';
    import heroes from '$lib/assets/partners/heroes-black-hd.webp';
    import hotel from '$lib/assets/partners/hotel.webp';
    import strasbourg from '$lib/assets/partners/strasbourg.webp';
    import ina from '$lib/assets/partners/ina.webp';
    import simoh from '$lib/assets/partners/simoh.webp';
    import udemy from '$lib/assets/partners/udemy.webp';
    import zebrologie from '$lib/assets/partners/zebrologie.webp';

    let images = [
        {
            img: bain,
            alt: "bain"
        },
        {
            img: eg,
            alt: "che pas"
        },
        {
            img: heroes,
            alt: "che pas"
        },
        {
            img: hotel,
            alt: "che pas"
        },
        {
            img: strasbourg,
            alt: "che pas"
        },
        {
            img: simoh,
            alt: "che pas"
        },
        {
            img: ina,
            alt: "che pas"
        },
        {
            img: udemy,
            alt: "che pas"
        },
        {
            img: zebrologie,
            alt: "che pas"
        }
    ]

</script>

<section class=" my-8">
    <h2 class=" text-2xl font-bold text-center my-2">Partenaires</h2>
    <div class=" flex flex-row flex-wrap justify-around items-center mx-auto w-11/12">
        {#each images as image}
            <div class=" w-20">
                <img src="{image.img}" alt="{image.alt}">
            </div>
        {/each}     
    </div>
</section>