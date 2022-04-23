<template>
  <InputText v-model="description"/>
  <div class="div-buttons">
    <Button @click="cancel" class="btn-cancel">Voltar</Button>
    <Button @click="saveTodo">Salvar</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: ""
    }
  },
  props: {
    todo: Object
  },
  created() {
    if (this.todo) {
      this.description = this.todo.description
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel")
    },
    saveTodo() {
      this.$emit("saveTodo", {...this.todo, description: this.description})
    }
  }
}
</script>

<style scoped>
  .div-buttons {
    margin-top: 1rem;
  }
  .btn-cancel {
    margin-right: 1rem;
  }
</style>