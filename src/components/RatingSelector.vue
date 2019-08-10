<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="currentRating">Vyberte rating</label>
          <md-select
            v-model="currentRating"
            name="currentRating"
            id="currentRating"
            @md-selected="$emit('selectedRating', currentRating)"
          >
            <md-option
              v-for="rating in allRatings"
              :key="rating"
              :value="rating"
              >{{ rating }}</md-option
            >
          </md-select>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingSelector",
  props: ["allRatings"],
  data: () => ({
    currentRating: null
  })
};
</script>

<style scoped></style>
