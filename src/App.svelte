<script>
  import Component1 from "./Component1.svelte";
  import Component2 from "./Component2.svelte";
  import Component3 from "./Component3.svelte";
  import { tableArray } from "./data-store.js";

  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>

  <Component1 />
  <Component2 />
  <Component3 tableData={$tableArray} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
