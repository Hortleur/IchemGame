<script>
	import discut from '$lib/assets/illu_discut.png';
</script>

<section id="presentation" class=" mt-4 mb-10">
	<div class=" lg:w-1/2 lg:mx-auto">
		<p class=" w-11/12 mx-auto text-center mt-6">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ultricies sollicitudin.
			Etiam venenatis, mi in semper iaculis, urna lacus egestas odio, eu ullamcorper libero eros
			eget ligula. Proin id tristique dolor, elementum pellentesque enim. Nullam ac ante et ante
			consequat eleifend vel in ligula. Quisque condimentum est at libero auctor, sollicitudin
			accumsan leo suscipit. Proin a nunc orci. Nam nec odio ac magna pharetra sollicitudin
			fermentum dictum tortor. Suspendisse dolor orci, scelerisque vel purus at, consectetur
			porttitor dui. Morbi id tempus magna, et vulputate mi. Nunc ullamcorper ex lorem, non blandit
			ipsum placerat sed.
		</p>
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
				rows="10"
				class=" textarea w-full ring-1 ring-base"
				required
			/>
		</div>
		<button class="btn btn-accent text-white font-bold">Je m'informe</button>
		<span class=" text-center underline text-success">Gratuit et sans engagement</span>
	</form>
</section>
