<template>
  <div class="venue">
    <div class="venue__information">
      <h2>{{venue.name}} <span class="venue__rating">{{venue.rating}}</span></h2>
      <p>
        {{venue.location.address}},
        {{venue.location.postalCode}}
        <span class="venue__latlng">
          LAT {{venue.location.lat}} LAT {{venue.location.lng}}
        </span>
      </p>
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
