<script>
  // Please fix the following bug.
  import { onMount } from "svelte";
  export let name = "Harold";

  function init() {
    // applied the font size in the  onMount() to fix this issue.
    onMount(() => {
      document.getElementById("my-name").style = "font-size: 2rem;";
    });
  }

  init();
</script>

<p id="my-name">My name is {name}</p>
