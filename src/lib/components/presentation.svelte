<script>
	import discut from '$lib/assets/illu_discut.png';
</script>

<section id="presentation" class=" mt-4 mb-10">
	<div class=" lg:w-1/2 lg:mx-auto">
		<div>
			<p class=" w-11/12 mx-auto text-center mt-3">
				Comment ne pas se tromper lorsque l’on veut devenir formateur avec toutes ces offres sur le marché ou le très bon côtoie le très mauvais ?
				En avez-vous assez des sessions de formation sans intérêt qui échouent à captiver votre public ? Rêvez-vous d'un environnement d'apprentissage où la motivation atteint des sommets et l'engagement explose ? Ne cherchez plus !
			</p>
			<p class=" w-11/12 mx-auto text-center mt-3">Fort de plus de 20 ans d’expériences dans la formation de formateurs ,nous nous sommes fixés comme but de former les meilleurs formateurs du monde francophone grâce à un contenu innovant et une pédagogie unique en francophonie base sur les sciences cognitives.</p>
			<p class=" w-11/12 mx-auto text-center mt-3">Rehaussez votre formation : Libérez le pouvoir de la gamification pour révolutionner l'apprentissage et stimuler l'engagement.</p>
			<p class=" w-11/12 mx-auto text-center mt-3">Nos formation étant reconnue recevrez ensuite une certification enregistrée sur France Compétences.</p>
		</div>
		<div class=" my-6">
			<img src={discut} alt="Illustration" class=" mx-auto" />
		</div>
	</div>
	<form
		action=""
		class=" flex flex-col flex-nowrap px-3 py-2 gap-3 w-11/12 mx-auto bg-base-200 rounded-md shadow-lg"
	>
		<h2 class=" font-semibold text-xl">Demande d'informations sans engagement</h2>
		<p class=" text-lg">
			Un conseiller vous accompagnera dans vos démarches dans les plus brefs délais.
		</p>
		<div class=" flex flex-col flex-nowrap">
			<label for="email" class=" font-semibold">Email</label>
			<input type="email" name="" id="email" class="input h-10 ring-1 ring-base" required />
		</div>
		<div>
			<label for="text" class=" font-semibold">Parlez nous de vous</label>
			<textarea
				name=""
				id="text"
				cols="30"
				rows="5"
				class=" textarea w-full ring-1 ring-base"
				required
			/>
		</div>
		<button class="btn btn-accent text-white font-bold">Je m'informe</button>
		<span class=" text-center underline text-success">Gratuit et sans engagement</span>
	</form>
</section>
