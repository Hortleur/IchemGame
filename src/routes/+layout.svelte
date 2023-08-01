<script>
	import '../app.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
	import Icon from '@iconify/svelte';
</script>

<Header />
<slot />
<Footer />
