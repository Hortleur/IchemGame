<script>
    import calendar from '$lib/assets/calendrier_IchemGame.pdf'
    import {onMount} from "svelte";
    let isIphone = (false)
    onMount(()=>{
        if(navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad') ){
            isIphone = true
        }
    })
</script>
<div class=" overflow-x-hidden">
    {#if isIphone}
        <div class="w-full min-h-screen grid place-items-center">
            <div>
                <p>Impossible d'afficher le calendrier de l'avent</p>
                <a href="{calendar}" download class="btn btn-info mx-auto w-full">Téléchargez le ici</a>
            </div>
        </div>
        {:else }
        <object data="{calendar}" type="application/pdf" class="min-h-screen w-full">
            <div class="w-full min-h-screen grid place-items-center">
                <div>
                    <p>Impossible d'afficher le calendrier de l'avent</p>
                    <a href="{calendar}" download class="btn btn-info mx-auto w-full">Téléchargez le ici</a>
                </div>
            </div>
        </object>
    {/if}

</div>