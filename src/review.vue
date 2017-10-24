<template>
  <v-container>
    <v-layout row wrap>
        <v-flex class="mb-2" xs12 sm8 md6 offset-md3 v-for="review in reviews" :key ='review.id'>
          <v-card>
            <v-container>
              <v-layout>
                <v-flex>
                  {{review.comment}}
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm6 md8 class="mt-2" >
                  <v-flex xs6 sm3 md5 style="display: inline-block">
                  <p class="primary--text" style="font-size: 18px;">Overall Rating:</p>
                  </v-flex>
                  <v-flex xs6 sm3 md4 style="display: inline">
                    <star-rating 
                    v-model='review.rating.overallRating'
                    class="mt-0 ml-2"
                    v-bind:star-size="18" 
                    :increment="0.5"
                    :inline = "true"
                    :show-rating="false"
                    active-color="#d32f2f"
                    style=""
                    :read-only = "true"
                  ></star-rating>
                  </v-flex>
                </v-flex>
              </v-layout>
            <!-- <v-dialog v-model="dialog"> -->
              <!-- <v-card> -->
                <!-- <v-container> -->
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md8 class="">
                      <v-flex xs6 sm3 md4 style="display: inline-block">
                      <p class="primary--text" style="font-size: 18px;">Cleanliness:</p>
                      </v-flex>
                      <v-flex xs6 sm3 md4 style="display: inline">
                        <star-rating 
                        v-model='review.rating.cleanliness'
                        class="mt-0 ml-2"
                        v-bind:star-size="18" 
                        :increment="0.5"
                        :inline = "true"
                        :show-rating="false"
                        active-color="#d32f2f"
                        style=""
                        :read-only = "true"
                      ></star-rating>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md8 class="">
                      <v-flex xs6 sm3 md4 style="display: inline-block">
                      <p class="primary--text" style="font-size: 18px;">Comfort:</p>
                      </v-flex>
                      <v-flex xs6 sm3 md4 style="display: inline">
                        <star-rating 
                        v-model='review.rating.comfort'
                        class="mt-0 ml-2"
                        v-bind:star-size="18" 
                        :increment="0.5"
                        :inline = "true"
                        :show-rating="false"
                        active-color="#d32f2f"
                        style=""
                        :read-only = "true"
                      ></star-rating>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md8 class="">
                      <v-flex xs6 sm3 md4 style="display: inline-block">
                      <p class="primary--text" style="font-size: 18px;">Location:</p>
                      </v-flex>
                      <v-flex xs6 sm3 md4 style="display: inline">
                        <star-rating 
                        v-model='review.rating.location'
                        class="mt-0 ml-2"
                        v-bind:star-size="18" 
                        :increment="0.5"
                        :inline = "true"
                        :show-rating="false"
                        active-color="#d32f2f"
                        style=""
                        :read-only = "true"
                      ></star-rating>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md8 class="">
                      <v-flex xs6 sm3 md4 style="display: inline-block">
                      <p class="primary--text" style="font-size: 18px;">Staff:</p>
                      </v-flex>
                      <v-flex xs6 sm3 md4 style="display: inline">
                        <star-rating 
                        v-model='review.rating.staff'
                        class="mt-0 ml-2"
                        v-bind:star-size="18" 
                        :increment="0.5"
                        :inline = "true"
                        :show-rating="false"
                        active-color="#d32f2f"
                        style=""
                        :read-only = "true"
                      ></star-rating>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                <!-- </v-container> -->
              <!-- </v-card> -->
            <!-- </v-dialog> -->
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import StarRating from './star-rating.vue'
export default {
  components: {
    StarRating
    // Review
  },
  props: ['reviews'],
  data() {
    return {
      dialog: false,
      dialogData: ''
    }
  },
  methods: {
    onClickRating(data) {
      this.dialog = true
      this.dialogData = data
    }
  }
}
</script>
