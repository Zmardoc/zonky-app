<template>
  <md-card class="md-layout-item md-small-size-100 calculator">
    <md-card-header>
      <div class="title">Průměrná výše půjček</div>
    </md-card-header>

    <md-card-content>
      <RatingSelector
        :allRatings="allRatings"
        @selectedRating="computeAvgLoan"
      />
      <AvgLoanAmount :avgLoan="avgLoan" :loanAmount="filteredLoans.length" />
    </md-card-content>
  </md-card>
</template>
<script>
import RatingSelector from "./RatingSelector";
import MockMarketPlace from "../mocks/OfflineMarketplace"; //TODO vyřešit cors
import AvgLoanAmount from "./AvgLoanAmount"; //TODO vyřešit cors

export default {
  name: "RatingCalculator",
  components: {
    RatingSelector,
    AvgLoanAmount
  },
  data: () => ({
    marketplace: [],
    allRatings: [],
    filteredLoans: [],
    avgLoan: 0
  }),
  created() {
    this.marketplace = MockMarketPlace.MARKETPLACE;
    this.allRatings = [
      ...new Set(this.marketplace.map(item => item.rating))
    ].sort();
    //this.computeAvgLoan(allRatings[0]);
  },
  methods: {
    computeAvgLoan(currentRate) {
      this.filteredLoans = this.marketplace.filter(
        m => m.rating === currentRate
      );
      this.avgLoan =
        this.filteredLoans.reduce((p, c) => p + c.amount, 0) /
        this.filteredLoans.length;
    }
  }
};
</script>
<style lang="less" scoped>
.calculator {
  max-width: 500px;
  padding: 20px;
  .title {
    font-family: Borden, Roboto, sans-serif;
    font-size: 35px;
    text-align: left !important;
    font-weight: 400;
    text-align: center;
    color: #37b4be;
  }
}
</style>
