<template>
  <div>
    <SearchGd />
    <div class="table">
      <ButtonGd />
      <TableGd />
    </div>
  </div>
</template>

<script>
import SearchGd from "./search.vue";
import ButtonGd from "./button.vue";
import TableGd from "./TableGd.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    SearchGd,
    ButtonGd,
    TableGd,
  },
};
</script>

<style scoped>
.table {
  padding: 20px;
}
</style>
