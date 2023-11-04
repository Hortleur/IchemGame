<script>	
	import '../app.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
	import Livret from '../lib/components/livret.svelte';
	import { onMount } from 'svelte';
    import {page} from "$app/stores";


    let currentRoute = $page.url.pathname
	export const ssr = false;
</script>

{#if !currentRoute.includes("/plaquette")}
<Header />
<Livret />
{/if}
<slot />
{#if !currentRoute.includes("/plaquette")}
<Footer />
{/if}