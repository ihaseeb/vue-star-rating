<template>
    <!-- <div>
        <star-rating v-model="rating" active-color="black" :increment="0.01"></star-rating> {{rating}}
          <review :reviews='reviews'></review>
    </div> -->
    <v-container>
            <review :reviews='reviews'></review>
    </v-container>
</template>

<script>
// import StarRating from '../../src/star-rating.vue'
import Review from '../../src/review.vue'

export default {
  components: {
    // StarRating,
    Review
  },
  data() {
    return {
      rating: 4.38,
      reviews: [{
        comment: 'first comment',
        rating: {
          cleanliness: 5,
          overallRating: 3,
          staff: 4,
          location: 3,
          comfort: 3
        }
      }, {
        comment: 'second comment',
        rating: {
          cleanliness: 4,
          overallRating: 4,
          staff: 3,
          location: 5,
          comfort: 4
        }
      }]
    }
  }
}
</script>
<style lang="stylus">
  @import '../../src/stylus/main'
</style>