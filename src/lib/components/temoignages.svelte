<script>
    let temoignages = [
        {
            id: 0,
            content: " Il est exceptionnel de rencontrer un formateur et coach aussi accompli que Ichem Brahami. Il a la capacité unique de combiner théorie et pratique, faisant de chaque session de formation une expérience profondément transformative. Ichem n'est pas simplement un formateur, il est un véritable expert dans son domaine. Il se consacre à améliorer nos compétences et notre compréhension avec une efficacité et une perspicacité inégalées. Chaque session de formation avec lui est un apprentissage précieux : il vous guide à travers des domaines complexes de connaissances avec une grande clarté et une grande assurance. C'est pourquoi je suis ravi qu’il propose cette nouvelle formation de formateur dirigée par lui. Ce n'est pas seulement une occasion d'apprendre de nouvelles compétences, c'est une occasion de se développer personnellement et professionnellement. Je vous invite à le rejoindre dans cette nouvelle aventure d'apprentissage. Avec Ichem comme guide, je suis convaincu que vous pourrez tous devenir des formateurs plus efficaces et avoir un impact plus fort sur sur ce monde. Le métier du formateur est un métier plein d’opportunités mais c’est un métier qui demande une formation solide et une expertise de pointe… vous savez maintenant où l’obtenir !!!",
            media: "",
            name: "David LEFRANCOIS",
            job: "Fondateur de l’Institut des Neurosciences Appliquées",
            temType: "texte"
        },
        {
            id: 1,
            media: "https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/hanine%20(1).mp4?t=2023-08-04T16%3A56%3A06.714Z",
            temType: "video",
            name:"Hanine",
            job:"Fondateur de Goodbye Confort Zone"
        },
        {
            id:2,
            media: "https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/temoignages/monique%20(1).mp4?t=2023-08-04T16%3A59%3A44.724Z",
            temType: "video",
            name: "Monique Sallaz",
            job:" Docteur en Neuroscience"
        }
    ]
</script>

<section id="temoignages" class=" my-8">
    <h2 class=" text-2xl font-bold text-center">Témoignages</h2>
    <div class=" lg:flex lg:flex-row lg:flex-wrap lg:justify-around lg:items-center"> 
        {#each temoignages as tem }
        <div class="card bg-base-100 shadow-xl w-11/12 lg:w-2/5 lg:shadow-lg my-3 mx-auto lg:mx-0">
            {#if tem.media}
                {#if tem.temType === "video"}
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video src="{tem.media}" controls class=" rounded-lg"></video>
                {:else}
                    <figure><img src="{tem.media}" alt="image {tem.name}"/></figure>
                {/if}
            {/if}
            <div class="card-body">
              <h2 class="card-title">{tem.name}</h2>
              {#if tem.temType === "texte"}
                <p>{tem.content}</p>
              {/if}
              <div class=" divider"></div>
              <p class=" font-bold text-lg">{tem.job}</p>
            </div>
          </div>
        {/each}
    </div>
</section>