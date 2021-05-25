<script>
  import { things } from './stores';
  export let message = 'Hello, Core Platform Api Team!!! (Child)';

  function addSomething() {
    $things.push('New thing! ' + new Date().toISOString());
    $things = $things;
  }
</script>

<h1>{message}</h1>

<button on:click={addSomething}>Add something</button>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }
</style>
