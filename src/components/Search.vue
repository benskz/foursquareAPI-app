<template>
  <div class="search">
    <div class="search__input">
      <form @submit.prevent="searchVenuesByLocation()">
        <input type="text" placeholder="Search for a location..." v-model="location">
      </form>
    </div>

    <transition-group tag="div" class="venues" name="fade">
      <venue v-for="venue in venues" :key="venue.venue.id" :venue="venue.venue" />
    </transition-group>
  </div>
</template>

<script>
  import foursquare from '../foursquare'
  import venue from './Venue.vue'

  export default {
    components: {
      venue,
    },

    data () {
      return {
        location: '',
        venues: {},
      }
    },

    methods: {
      searchVenuesByLocation () {
        console.log(`searching for ${this.location}`)
        foursquare.search(this.location, (response) => {
          this.venues = response.groups[0].items
        })
      },
    },
  }
</script>
