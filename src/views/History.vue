<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      Записей пока нет
      <router-link to="/record">Добавье первую</router-link>
    </p>

    <section v-else>
      <HistoryTable
        :records="items"
      />

      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Назад'"
        :next-text="'Вперёд'"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
      />
    </section>
  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin';
import HistoryTable from "@/components/HistoryTable";

export default {
  name: "History",
  mixins: [paginationMixin],
  components: {
    HistoryTable
  },
  data: () => ({
    loading: true,
    records: []
  }),
  methods: {

  },
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords');
    const categories = await this.$store.dispatch('fetchCategories');

    this.records = this.records.map(record => {
      return {
        ...record,
        categoryName: categories.find(c => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText: record.type === 'income' ? 'Доход' : 'Расход'
      }
    });

    this.setupPagination(this.records);
    this.loading = false;
  }
}
</script>

<style scoped>

</style>
