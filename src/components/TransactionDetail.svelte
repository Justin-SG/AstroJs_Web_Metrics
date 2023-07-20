<script lang="ts">
	import FormattedNumber from './FormattedNumber.svelte';
	import type { DisplayableTransaction } from './booking';

	export let transaction: DisplayableTransaction;
</script>

<div
	class="grid cursor-pointer grid-cols-[minmax(0,4rem)_3fr_3fr_2fr] grid-rows-2"
>
	<div class="xl:text-lg-custom row-span-2 text-base">
		{transaction.date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })}
	</div>
	<div
		class="xl:text-lg-custom overflow-hidden truncate text-base"
		title={transaction.category}
	>
		{transaction.category}
	</div>
	<div class="hide-scrollbar row-span-2 my-auto flex overflow-x-scroll rounded-full text-sm">
	</div>
	<div class="xl:text-lg-custom text-right text-base">
		<FormattedNumber number={transaction.amount} />
	</div>
	<div class="truncate text-sm text-gray-500">{transaction.description}</div>
	<div class="overflow-hidden truncate text-right text-sm text-gray-500">
		{transaction.account}
	</div>
</div>
<hr class="mb-2" />
