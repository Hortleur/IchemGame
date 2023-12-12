<script>
    import ichem from '$lib/assets/formateurs/ichem.webp'
    import monique from '$lib/assets/formateurs/monique.webp'
    import manu from '$lib/assets/formateurs/manu.webp'
    import salim from '$lib/assets/formateurs/salim.webp'

    let items = [
        {
            id:0,
            name: "Ichem",
            video:'https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/ichem.mp4?t=2023-08-12T18%3A36%3A14.848Z',
            image: ichem
        },
        /*
        {
            id: 1,
            name: 'Monique',
            video: 'https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/presentation_monique.mov?t=2023-08-12T15%3A49%3A31.439Z',
            image: monique
        },
        {
            id:2,
            name: 'Manuel',
            video: 'https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/presentation_manu.mp4?t=2023-08-12T15%3A49%3A19.443Z',
            image: manu
        },
        {
            id:3,
            name: 'Salim',
            video: 'https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/video_formateur.mp4?t=2023-08-21T00%3A10%3A10.534Z',
            image: salim
        }*/
    ]
</script>

<section>
    <div id="formateur" class=" h-20"></div>
    <h2 class=" text-2xl font-bold text-center">Formateurs</h2>

    <div class=" lg:grid lg:place-items-center">
        {#each items as item }
        <div class="card bg-base-100 shadow-xl w-11/12 md:w-7/12 lg:w-2/3 mx-auto my-8">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video src="{item.video}" poster="{item.image}" controls/>
            <div class="card-body">
                <h2 class="card-title">{item.name}</h2>
            </div>
        </div>
    {/each }
    </div>
    
</section>