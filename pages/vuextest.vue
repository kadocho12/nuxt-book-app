<template>
  <div>
    <v-btn @click="$store.commit('increment')">+</v-btn>
    {{ $store.state.counter }}
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    // ...mapGetters({todos: 'getList'}),
    ...mapGetters({getList: 'todos/getList'}),
    todos() {
      // return this.$store.state.todos.list
      return this.getList
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'todos/toggle',
      add: 'todos/add'
    }),
    addTodo(e) {
      // this.$store.commit('todos/add', e.target.value)
      this.add(e.target.value)
      e.target.value = ''
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>