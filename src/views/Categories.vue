<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate @create="addNewCategory" />

        <CategoryEdit />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryEdit from "@/components/CategoryEdit";
import CategoryCreate from "@/components/CategoryCreate";


export default {
  name: "Categories",
  data: () => ({
    categories: []
  }),
  components: {
    CategoryCreate,
    CategoryEdit
  },
  methods: {
    addNewCategory(category){
      this.categories.push(category);
      console.log(this.categories)
    }
  }
}
</script>

<style scoped>

</style>
