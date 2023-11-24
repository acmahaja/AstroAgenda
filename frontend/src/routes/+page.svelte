<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	let serverMessage: string = '';

	onMount(async () => {
		try {
			const res: any = await axios.get('http://localhost:8888/');
            serverMessage = res.data;
        } catch (error) {
			console.log(error);
		}
	});

	async function getServerMessage() {}

	getServerMessage();
</script>

<h1>AstroAgenda</h1>
<p>Server Message: {serverMessage}</p>
