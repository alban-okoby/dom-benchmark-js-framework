<script>
    import { onMount } from "svelte";

  // @ts-ignore
  let tasks = [];
  let newName = '';
  let newPriority = 'low';
  // @ts-ignore
  let editId = null;

  function addTask() {
    // @ts-ignore
    tasks = [...tasks, { id: Date.now(), name: newName, priority: newPriority }];
    newName = '';
  }
  // @ts-ignore
  function removeTask(id) {
    // @ts-ignore
    tasks = tasks.filter(t => t.id !== id);
  }

  onMount(() => {
  // @ts-ignore
  window.benchmarkAdd = (count) => {
    const base = Date.now();
    for (let i = 0; i < count; i++) {
      // @ts-ignore
      tasks = [...tasks, { id: base + i, name: `Task ${base + i}`, priority: 'low' }];
    }
  };
});
</script>

<div>
  <div>
    <input bind:value={newName} placeholder="Task name" />
    <select bind:value={newPriority}>
      <option>low</option><option>medium</option><option>high</option>
    </select>
    <button on:click={addTask}>Add</button>
  </div>
  <ul>
    {#each tasks as task (task.id)}
      <li>
        {#if editId !== task.id}
          {task.name} ({task.priority})
          <button on:click={() => editId = task.id}>Edit</button>
          <button on:click={() => removeTask(task.id)}>Delete</button>
        {:else}
          <input bind:value={task.name} />
          <select bind:value={task.priority}>
            <option>low</option><option>medium</option><option>high</option>
          </select>
          <button on:click={() => editId = null}>Save</button>
        {/if}
      </li>
    {/each}
  </ul>
</div>