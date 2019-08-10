<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field :class="{ 'md-invalid': err }">
        <label for="currentRating">Vyberte rating</label>
        <md-select
          v-model="currentRating"
          name="currentRating"
          id="currentRating"
          @md-selected="$emit('selectedRating', currentRating)"
          md-dense
        >
          <md-option
            v-for="rating in allRatings"
            :key="rating"
            :value="rating"
            >{{ rating }}</md-option
          >
        </md-select>
        <span class="md-error">Byla použita mockovaná data</span>
      </md-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingSelector",
  props: ["allRatings", "err"],
  data: () => ({
    currentRating: null
  })
};
</script>

<style scoped></style>
