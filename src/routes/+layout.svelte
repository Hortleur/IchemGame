<script>	
	import '../app.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
	import Livret from '../lib/components/livret.svelte';

	export const ssr = false;
</script>

<Header />
<Livret />
<slot />
<Footer />
