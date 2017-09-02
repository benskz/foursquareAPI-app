<template>
  <a class="venue" :href="venue.url" target="_blank">
    <div class="row">
      <div class="column column--start">
        <h2 class="venue__header">{{venue.name}}</h2>
        <span class="venue__rating">{{venue.rating}}</span>
      </div>
      <div v-if="venue.hours && venue.hours.isOpen" class="column column--end">
        <p class="venue__status" :class="{'venue__status--closed': !venue.hours.isOpen}">
          {{venue.hours.status}}
        </p>
      </div>
    </div>

    <div class="row">
      <div class="column column--start">
        <p v-if="venue.location.address && venue.location.postalCode">{{venue.location.address}}, {{venue.location.postalCode}}</p>
      </div>
      <div class="column column--end">
        <p class="venue__latlng">LAT {{venue.location.lat}} LAT {{venue.location.lng}}</p>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    props: [
      'venue',
    ],
  }
</script>
