<script>
    import Animer from '$lib/assets/plaquette/animer.jpg'
    import Bilan from '$lib/assets/plaquette/bilan.jpg'
</script>

<div class="">
    <h1 class="text-center text-3xl lg:text-5xl font-bold">IchemGame</h1>
    <div class="flex flex-col flex-nowrap lg:flex-row gap-10 my-10">
        <div class="card card-bordered border-2 border-base-200 shadow-xl w-11/12 md:w-7/12 xl:w-1/3 mx-auto">
            <figure>
                <img src="{Animer}" alt="illustation animation de formation">
            </figure>
            <h2 class="card-title my-2 ml-2">Animer des Formation</h2>
            <div class="card-actions">
                <a href="/animer-des-formations" class="btn btn-accent mx-auto">Voir Plus</a>
            </div>
        </div>
        <div class="card card-bordered border-2 border-base-200 shadow-xl w-11/12 md:w-7/12 xl:w-1/3 mx-auto">
            <figure>
                <img src="{Bilan}" alt="illustation bilan de compétences">
            </figure>
            <h2 class="card-title my-2 ml-2">Bilan de Compétences</h2>
            <div class="card-actions">
                <a href="/bilan-de-competences" class="btn btn-accent mx-auto">Voir Plus</a>
            </div>
        </div>
    </div>
</div>
