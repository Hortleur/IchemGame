<script>
    import david from "$lib/assets/temoignages/1.webp"
    import bakari from "$lib/assets/temoignages/2.webp"
    import monique from "$lib/assets/temoignages/4.webp"
    import hanine from "$lib/assets/temoignages/3.webp"
    let temoignages = [
        {
            id: 0,
            media: "https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/temoignage_david_mp4.mp4?t=2023-08-20T17%3A28%3A17.038Z",
            image:`${david}`,
            name: "David LEFRANCOIS",
            job: "Fondateur de l’Institut des Neurosciences Appliquées",
            temType: "texte",
            link:'https://www.youtube.com/channel/UCsOuelHUWaWuqvRFKBnTIYw'
        },
        {
            id: 1,
            media: "https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/hanine%20(1).mp4?t=2023-08-04T16%3A56%3A06.714Z",
            image:`${hanine}`,
            temType: "video",
            name:"Hanine Mhannd",
            job:"Fondateur de Goodbye Confort Zone",
            link:"https://haninemhannd.com/"
        },
        {
            id:2,
            media: "https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/monique%20(1).mp4?t=2023-08-04T16%3A59%3A44.724Z",
            image:`${monique}`,
            temType: "video",
            name: "Monique Sallaz",
            job:" Docteur en Neuroscience",
            link:"https://zebrologieetcie.com/mon-parcours"
        },
        {
            id:3,
            media: "https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/bakari?t=2023-08-08T12%3A49%3A49.773Z",
            image: `${bakari}`,
            temType: "video",
            name: "Bakari Niakaté",
            job:"Entrepreneur - Coach",
            link:"https://www.bakari.fr/"
        }
    ]
</script>

<section  class=" my-8">
    <div id="temoignages" class=" h-20"></div>
    <h2 class=" text-2xl font-bold text-center">Témoignages</h2>
    <div class=" lg:flex lg:flex-row lg:flex-wrap lg:justify-around lg:items-center"> 
        {#each temoignages as tem }
        <div class="card bg-base-100 shadow-xl w-11/12 lg:w-2/5 lg:shadow-lg my-3 mx-auto lg:mx-0">
            {#if tem.media}
                <!-- svelte-ignore a11y-media-has-caption -->
                <video src="{tem.media}" controls poster="{tem.image}"></video>
                {:else}
                <img src="{tem.image}" alt="{tem.name}" loading="lazy">
            {/if}    
            <div class="card-body">
              <a href="{tem.link}" class=" hover:cursor-pointer" target="_blank"><h2 class="card-title">{tem.name}</h2></a>
              <div class=" divider"></div>
              <p class=" font-bold text-lg">{tem.job}</p>
            </div>
          </div>
        {/each}
    </div>
    <div class=" my-3">
        <a  href="https://www.google.com/search?client=ms-android-huawei-rev1&sa=X&cs=0&biw=360&bih=657&q=Coach-Formateur+IchemGame+Bilan+de+compétences&ludocid=10195814231954778951&lsig=AB86z5WEUUNiwNV2jPPEKb-bHbPO&kgs=f55f69409dba147b&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/2#lrd=0x4796c96c77a980f3:0x8d7ecf0633896b47,1,,,," target="_blank"><button class=" btn btn-accent text-white font-semibold mx-auto w-11/12 md:w-7/12 lg:w-5/12 block"> Regarder les témoignages</button></a>
    </div>
    <div class=" my-3">
        <a  href="https://calendly.com/ichemgame/reunion-de-60-minutes" target="_blank"><button class=" btn bg-emerald-400 text-white font-semibold mx-auto w-11/12 md:w-7/12 lg:w-5/12 block">Prendre rendez-vous</button></a>
    </div>
</section>