<script>
  import { things } from './stores';
  import { fade } from 'svelte/transition';
  import Child from './Child.svelte';

  let parentMessage = 'This is a message';

  $: formattedMessage = `Formatted: ${parentMessage}`;

  $: {
    console.log(formattedMessage);
  }

  function handleClick() {
    parentMessage = 'Hello? ' + new Date().toISOString();
  }
</script>

<Child message={formattedMessage} />

<button on:click={handleClick}>Click me</button>

<input bind:value={parentMessage} />

<ul>
  {#each $things as thing}
    <li transition:fade>{thing}</li>
  {/each}
</ul>
