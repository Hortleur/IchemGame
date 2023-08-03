<script>
    import asso from '$lib/assets/partner/asso_appart.webp';
    import bain from '$lib/assets/partner/bain.webp';
    import eg from '$lib/assets/partner/eg.webp';

    let images = [
        {
            img: asso,
            alt: "che pas"
        },
        {
            img: bain,
            alt: "bain"
        },
        {
            img: eg,
            alt: "che pas"
        }
    ]

</script>

<section>
    <h2 class=" text-2xl font-bold text-center my-2">Partenaires</h2>
    <div class="">
        {#each images as image}
            <div class="">
                <img src="{image.img}" alt="{image.alt}">
            </div>
        {/each}     
    </div>

</section>