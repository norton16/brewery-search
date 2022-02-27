<template>
    <div class="map">
        <l-map
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 80%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
            >
            <l-tile-layer
                :url="url"
                :attribution="attribution"
                />
            <l-marker :lat-lng="withPopup">
            </l-marker>
            <l-marker :lat-lng="withTooltip">
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
    name: 'Map',
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            zoom: 17,
            center: latLng(this.$store.state.breweryPage.latitude, this.$store.state.breweryPage.longitude),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentZoom: 11.5,
            currentCenter: latLng(this.$store.state.breweryPage.latitude, this.$store.state.breweryPage.longitude),
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5
            },
            showMap: true
        };
    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
    }
};
</script>

<style>
    .map {
        height: 500px; 
        width: 100%;
    }
</style>
