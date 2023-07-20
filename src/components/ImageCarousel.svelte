<script lang="ts">
	export let posts: { image: string; title: string; continent: string }[];

	let currentPostIndex = 0;

	const changeIndexBy = (changeBy: number) => {
		displayArticle(currentPostIndex + changeBy);
	};

	const displayArticle = (index: number) => {
		if (index < 0 || index > posts.length - 1) return;
		currentPostIndex = index;
	};
</script>

<div>
	<div class="m-auto w-full max-w-4xl pb-3">
		<div class="hover-img bg-white">
			<a href="#top">
				<img class="max-w-full w-full mx-auto" src={posts[currentPostIndex].image} alt="alt title" />
			</a>
			<div class="py-3 px-6">
				<h3 class="text-lg font-bold leading-tight mb-2">
					<a href="#top">{posts[currentPostIndex].title}</a>
				</h3>
				<a class="text-gray-500" href="#top">
					<span class="inline-block h-3 border-l-2 border-red-600 mr-2" />
					{posts[currentPostIndex].continent}
				</a>
			</div>
		</div>
	</div>
	<button
		on:click={() => changeIndexBy(-1)}
		class="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg"
	>
		&#10094;
	</button>
	<button
		on:click={() => changeIndexBy(1)}
		class="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg right-4"
	>
		&#10095;
	</button>
</div>
<div style="text-align:center">
	{#each posts as _, index}
		<button
			on:click={() => displayArticle(index)}
			class="cursor-pointer h-4 w-4 mx-1 bg-slate-400 rounded-lg inline-block transition-all hover:bg-slate-100"
		/>
	{/each}
</div>
