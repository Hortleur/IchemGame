<script>
	import logo from '$lib/assets/logo.png';
</script>

<header class="navbar bg-base-300 text-white sticky top-0 z-20">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0"  class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 font-bold"
			>
				<li><a href="/">Acceuil</a></li>
				<li>
					<a href="#formateur">
						Formateurs
					</a>
				</li>
				<li>
					<a href="#modules">Programme</a>
				</li>
				<li>
					<a href="#formation">
						Formation
					</a>
				</li>
				<li><a href="#tarifs">Tarifs</a></li>
				<li>
					<a href="#temoignages">Témoignages</a>
				</li>
			</ul>
		</div>
		<a class=" w-10 md:w-16" href="/">
			<img src={logo} alt="Logo Ichem game" class=" object-contain mask mask-circle" />
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 font-bold text-md">
			<li><a href="/">Acceuil</a></li>
			<li>
				<a href="#formateur">
					Formateurs
				</a>
			</li>
			<li>
				<a href="#modules">Programme</a>
			</li>
			<li>
				<a href="#formation">
					Formation
				</a>
			</li>
			<li>
				<a href="#tarifs">Tarifs</a>
			</li>
			<li>
				<a href="#temoignages">Témoignages</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn btn-accent text-white font-bold" href="https://calendly.com/ichemgame/reunion-de-60-minutes" target="_blank">Devenez formateur 4.0</a>
	</div>
</header>
