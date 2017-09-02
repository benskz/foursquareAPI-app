<template>
  <div class="search">
    <div class="search__input">
      <form @submit.prevent="searchVenuesByLocation()">
        <input type="text" placeholder="Search for a location..." v-model="location">
      </form>
    </div>

    <div class="venues">
      <div v-for="venue in venues" :key="venues.id" class="venues__item">
        {{venue.venue.name}}
      </div>
    </div>
  </div>
</template>

<script>
  import foursquare from '../../foursquare'

  export default {
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
