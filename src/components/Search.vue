<template>
  <div class="container">
    <div class="grid grid-cols-12 content-center search-container">
      <div class="col-span-0 md:col-span-3"></div>
      <div class="col-span-12 md:col-span-6">
        <form>
          <input type="text" id="search" placeholder="Start searching for breweries!" v-bind:value="input" @input="fetchBreweries()" onsubmit="return false">
        </form>
      </div>
      <div class="col-span-0 md:col-span-3"></div>
    </div>
    <div class="grid grid-cols-12 gap-4 breweries-wrapper content-center">
      <div class="col-span-12 md:col-span-4 lg:col-span-4 brewery-result" v-for="brewery in this.$store.state.breweryList" :key="brewery.id">
        <router-link to="/About">
          <Brewery :breweryInfo='brewery' />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Brewery from './Brewery.vue'

export default {
  name: 'HelloWorld',
  components: {
    Brewery
  },
  data() {
    return {
      input: this.$store.state.searchState,
    }
  },
  methods: {
    async fetchBreweries() {
      const search = document.getElementById('search').value;
      this.$store.commit('updateSearch', search);
      this.input = search;

      try {
        const res = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${search}`);
        let breweries = await res.json();
        this.$store.commit('updateBreweryList', breweries);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1400px;
  padding: 20px;
}
.search-container {
  margin-bottom: 40px;
}
#search {
  width: 100%;
  background: #f4f4f4;
  border-radius: 5px;
  padding: 10px 15px;
  outline: none;
  transition: 0.2s;
}
#search:focus {
  background: #ffffff;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.05);
}
.brewery-result a {
  color: #2c3e50;
  transition: 0.2s;
}
.brewery-result a:hover {
  color: #a87b00;
}
</style>
