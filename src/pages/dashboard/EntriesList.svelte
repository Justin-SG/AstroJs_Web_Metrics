<script lang="ts">
	import TransactionsDetail from './TransactionDetail.svelte';
	import type { DisplayableTransaction } from './booking';

	export let bookings: DisplayableTransaction[];
</script>

<div class="px-4">
	{#each bookings as booking}
		<button class="contents" on:click={() => alert('clicked on something')}>
			<TransactionsDetail transaction={booking} />
		</button>
	{/each}
</div>
