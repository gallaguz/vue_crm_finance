<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <HomeBill />

      <HomeRate />
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/HomeBill";
import HomeRate from "@/components/HomeRate";

export default {
  name: 'Home',
  components: {
    HomeBill,
    HomeRate
  }
}
</script>
