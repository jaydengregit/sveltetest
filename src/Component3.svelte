<script>
  // Please build a dynamic table component, based on the design provided plus an action column.
  export let tableData;
  function onClick(name) {
    alert("Clicked " + name);
  }
</script>

<h1>Table</h1>
<table>
  <thead>
    <tr>
      {#each Object.keys(tableData[0]) as columnHeading}
        <th>{columnHeading}</th>
      {/each}
      <th>Action</th>
    </tr><tr />
  </thead>
  <tbody>
    {#each Object.values(tableData) as row}
      <tr>
        {#each Object.values(row) as cell}
          <td>{cell}</td>
        {/each}
        <td><button on:click={onClick(row.Name)}>Click Me</button></td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table,
  th,
  td {
    border-collapse: collapse;
    margin: 10px;
  }
  table {
    justify-content: center;
    display: inline-block;
    font-size: 14px;
  }
  thead {
    background: #ddd;
  }
  thead tr th {
    padding: 1rem;
  }
  tbody {
    background: #eee;
    color: grey;
  }
  tbody tr {
    border-bottom: 1px solid #ddd;
  }
  tbody tr td {
    padding: 1rem;
  }
</style>
