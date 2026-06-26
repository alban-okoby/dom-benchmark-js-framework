<template>
  <div>
    <div>
      <input v-model="newName" placeholder="Task name" />
      <select v-model="newPriority">
        <option>low</option><option>medium</option><option>high</option>
      </select>
      <button @click="addTask">Add</button>
    </div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <template v-if="editId !== task.id">
          {{ task.name }} ({{ task.priority }})
          <button @click="editId = task.id">Edit</button>
          <button @click="removeTask(task.id)">Delete</button>
        </template>
        <template v-else>
          <input v-model="task.name" />
          <select v-model="task.priority">
            <option>low</option><option>medium</option><option>high</option>
          </select>
          <button @click="editId = null">Save</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const newName = ref('');
const newPriority = ref('low');
const editId = ref(null);

const addTask = () => {
  tasks.value.push({ id: Date.now(), name: newName.value, priority: newPriority.value });
  newName.value = '';
};
const removeTask = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id);
};
</script>