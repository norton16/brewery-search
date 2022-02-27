<template>
  <div class="grid grid-cols-12 content-center about">
    <div class="col-span-0 md:col-span-3">
    </div>
      <div class="col-span-12 md:col-span-6 brewery-info">
      <h1>{{ brewery.name }}</h1>
        <div class="info-container">
          <div>
            <img src="../assets/map-pin.png" alt="address-icon"/>
          </div>
          <div>
            <p class="brewery-address">{{ brewery.street }}, {{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</p>
          </div>
        </div>
        <div v-if="brewery.website_url" class="info-container">
          <div>
            <img src="../assets/home.png" alt="address-icon"/>
          </div>
          <div>
            <a class="link-hover" v-bind:href="brewery.website_url" target="_blank">{{ brewery.website_url }}</a>
          </div>
        </div>
        <div v-if="brewery.phone" class="info-container">
          <div>
            <img src="../assets/phone.png" alt="address-icon"/>
          </div>
          <div>
            <a class="link-hover" v-bind:href="`tel:${brewery.phone}`">
              ({{ brewery.phone.slice(0,3) }}) {{ brewery.phone.slice(3,6) }}-{{ brewery.phone.slice(6,10) }}
            </a>
          </div>
        </div>
        <img class="brewery-img" src="../assets/brewery.jpg" alt="brewery-image">
      </div>
    <div class="col-span-0 md:col-span-3">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  props: {
  },
  data() {
    return {
      brewery: this.$store.state.breweryPage,
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .about {
    margin: 0 auto;
    max-width: 1400px;
    padding: 20px;
    text-align: left;
  }
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  .brewery-info {
    margin: 0 auto;
  }
  .info-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 25px 0px;
  }
  .info-container div:first-of-type {
    margin-right: 10px;
  }
  .link-hover {
    transition: 0.2s;
  }
  .link-hover:hover {
    color: #a87b00;
  }
  .brewery-img {
    margin-top: 55px;
    width: 500px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.05);
  }
</style>
