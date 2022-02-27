<template>
    <div class="brewery-tile" @click="breweryPage(breweryInfo)">
        <p>{{breweryInfo.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'Brewery',
    props: {
        breweryInfo: Object
    },
    methods: {
        breweryPage(obj) {
            this.$store.commit('updateBreweryPage', obj);
        }
    }
}
</script>

<style scoped>
    .brewery-tile {
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        margin: 5px 0px;
        padding: 15px;
        box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.03);
        border-radius: 5px;
        font-weight: bold;
    }
</style>