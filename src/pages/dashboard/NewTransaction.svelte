<script lang="ts">
	import { z } from 'zod';

	let modalHtmlElement: HTMLDivElement;

	function toggleModal() {
		modalHtmlElement.classList.toggle('hidden');
	}

	function submit(event: SubmitEvent) {
		const data = {
			date: document.querySelector<HTMLInputElement>('#date')!.value,
			amount: document.querySelector<HTMLInputElement>('#amount')!.value,
			accountId: document.querySelector<HTMLInputElement>('#accountId')!.value,
			description: document.querySelector<HTMLInputElement>('#description')!.value
		};

		const schema = z.object({
			date: z.coerce.date(),
			amount: z.coerce.number().positive(),
			accountId: z.coerce.number().positive(),
			description: z.string().max(255)
		});

		const result = schema.safeParse(data);
		console.log(result);

		if (!result.success) event.preventDefault();
	}
</script>

<button
	class="bg-green-300 fixed bottom-2 right-2 z-20 ml-2 rounded-full px-5 py-5"
	on:click={toggleModal}
	><svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="h-7 w-7"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
</button>

<div
	bind:this={modalHtmlElement}
	class="hidden fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black z-50"
>
	<button on:click={toggleModal}>Close</button>
	<div class="flex items-center justify-center w-full h-full">
		<div class="w-full p-6 max-w-6xl bg-white rounded">
			<form class="w-full" action="/" method="POST" on:submit={submit}>
				<div class="flex-between flex flex-wrap gap-y-1.5">
					<div class="w-full space-y-1.5">
						<label for="date" class="mb-2 block text-sm font-medium"> Date </label>
						<input
							id="date"
							type="date"
							name="date"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
							required
						/>
					</div>
					<div class="w-full space-y-1.5">
						<label for="amount" class="mb-2 block text-sm font-medium"> Amount </label>
						<input
							id="amount"
							type="number"
							name="amount"
							class="w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
							min="0"
							step=".01"
							pattern="^\d*(\.\d{2})?$"
							placeholder="0,00"
							required
						/>
					</div>
					<div class="w-full space-y-1.5">
						<select
							id="accountId"
							name="accountId"
							required
							class="block w-full rounded-lg border p-2.5 text-base"
						>
							<option value="1">Savings account</option>
							<option value="2">Daily account</option>
						</select>
					</div>
					<div class="w-full md:pl-1">
						<label for="description" class="mb-2 block text-sm font-medium"> Description </label>
						<textarea
							id="description"
							rows="4"
							name="description"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
						/>
					</div>
				</div>
				<div class="mt-2 flex">
					<button class="my-2 mx-auto bg-green-300 px-4 py-2 rounded" type="submit">
						Add transfer
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
