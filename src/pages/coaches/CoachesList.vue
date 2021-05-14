<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button>Refresh</base-button>
        <base-button mode="outline" link to="/register"
          >Register as a Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem';
export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']; //second one is getter name firstt one is module napesacpe name
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>