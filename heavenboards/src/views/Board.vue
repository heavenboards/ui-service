<script setup lang="ts">
    import { ref } from 'vue';
    import Brand from '../components/Brand.vue'

    //Реактивная переменная для хранения задачи
    const taskName = ref('');

    //Тестовый вариант. Без использования апихи
    interface Task {
      id: number;
      name: string;
    }

    //Тестовый вариант. Без использования апихи
    interface Column {
      id: number;
      name: string;
      tasks: Task[];
    }

    const columns = ref<Column[]>([
      { id: 1, name: 'To Do', tasks: [] },
      { id: 2, name: 'In Progress', tasks: [] },
      { id: 3, name: 'Finished', tasks: [] },
    ]);

    //Добавление задачи
    function addTask(columnId: number): void {

      if(taskName.value.trim() === '') return;
      const column = columns.value.find(c => c.id === columnId);

      if (column) {
        const newTaskId = Date.now();
        column.tasks.push({ id: newTaskId, name: taskName.value });
        taskName.value = '';
      }

    }

    //Перенос заадчи
    function moveTask(taskId: number, fromColumnId: number): void {
      const fromColumn = columns.value.find(c => c.id === fromColumnId);
      const toColumn = columns.value.find(c => c.id === fromColumnId + 1);

      if(fromColumn && toColumn) {
        const taskIndex = fromColumn.tasks.findIndex(t => t.id === taskId);
        if (taskIndex > -1) {
          const [task] = fromColumn.tasks.splice(taskIndex, 1);
          toColumn.tasks.push(task);
        }
      }
    }
</script>

<template>
  <div class="menu">
    <div class="menu-content">
      <Brand/>
      <button>invite</button>
      <button>settings</button>
    </div>
  </div>
  <div class="board-name">My Boards</div>
  <div class="board">
    <div class="board-content">
      <div class="column-wrapper" v-for="column in columns" :key="column.id">
        <div class="column">
          <div class="title">{{ column.name }}</div>
          <hr>
          <div class="tasks">
            <div v-for="task in column.tasks" :key="task.id" class="task">
              {{ task.name }}
              <button v-if="column.id < 3" @click="moveTask(task.id, column.id)">Move to Next Stage</button>
            </div>
          </div>
          <input v-if="column.id === 1" v-model="taskName" placeholder="New task name" />
          <button v-if="column.id === 1" @click="addTask(column.id)">Add Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./styles/BoardStyles.css";
</style>
