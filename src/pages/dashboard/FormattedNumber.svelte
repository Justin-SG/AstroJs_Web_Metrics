<script lang="ts">
	export let number: number | undefined;
</script>

{`${number?.toLocaleString(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
})} €` || ''}