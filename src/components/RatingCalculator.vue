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
//import MockMarketPlace from "../mocks/OfflineMarketplace";
import AvgLoanAmount from "./AvgLoanAmount";

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
    //TODO cors vypnuty v prohlížeči, nutno implementovat crossorigin.me (zatím nefunguje)
    this.axios
      .get(`${process.env.VUE_APP_API}/loans/marketplace`)
      .then(res => {
        this.marketplace = res.data;
        this.allRatings = [
          ...new Set(this.marketplace.map(item => item.rating))
        ].sort();
      })
      .catch(error => {
        console.error(error);
      });
    /*
    this.marketplace = MockMarketPlace.MARKETPLACE;
    this.allRatings = [
      ...new Set(this.marketplace.map(item => item.rating))
    ].sort();*/
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
