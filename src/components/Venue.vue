<template>
  <div class="venue">
    <div class="row">
      <div class="column column--start">
        <h2 class="venue__header">{{venue.name}} <span class="venue__rating">{{venue.rating}}</span></h2>
      </div>
      <div class="column column--end">
        <p>Is open</p>
      </div>
    </div>

    <div class="row">
      <div class="column column--start">
        <p>{{venue.location.address}}, {{venue.location.postalCode}}</p>
      </div>
      <div class="column column--end">
        <p>LAT {{venue.location.lat}} LAT {{venue.location.lng}}</p>
      </div>
    </div>
    <!-- {{venue.venue}} -->
  </div>
</template>

<script>
  export default {
    props: [
      'venue',
    ],
  }
</script>
