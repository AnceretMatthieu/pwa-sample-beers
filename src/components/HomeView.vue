<template>
    <div class="mdl-grid">      
        <div v-for="beer in filteredItems(1, 3)" :key="beer.id" class="mdl-cell">
            <div class="image-card" @click="displayDetails(beer.id)">
                <div class="image-card__picture">
                    <img :src="beer.image_url" />
                </div>
                <div class="image-card__comment mdl-card__actions">
                    <span>{{ beer.name }}</span>
                </div>
            </div>
        </div>
        <div v-for="beer in filteredItems(2, 3)" :key="beer.id" class="mdl-cell">
            <div class="image-card" @click="displayDetails(beer.id)">
                <div class="image-card__picture">
                    <img :src="beer.image_url" />
                </div>
                <div class="image-card__comment mdl-card__actions">
                    <span>{{ beer.name }}</span>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    import {HTTP} from '../punkapi'

    export default {
        methods: {
            displayDetails (id) {
                this.$router.push({ name: 'detail', params: { id: id }});
            },
            filteredItems(column, columns) {
                const self = this; // Enables us to pass this to the method
                const total = this.beers.length; // How many items
                const gap = Math.ceil(total / columns); // How many per col
                let top = (gap * column); // Top of the col
                const bottom = ((top - gap) + 1); // Bottom of the col
                top -= 1; // Adjust top back down one
                return self.beers.filter(item =>
                    self.beers.indexOf(item) >= bottom
                    && self.beers.indexOf(item) <= top,
                ); // Return the items for the given col
            },
        },
        data () {
            return {
                beers: []
            }
        },
        created () {
            HTTP.get('beers')
                .then(response => {
                    this.beers = response.data
                })
                .catch(e => {
                    console.error(e)
                })
        }
    }
</script>

<style scoped>
    .image-card {
        position: relative;
        cursor: pointer;
        margin-bottom: 8px;
    }
    .image-card:hover {
        background-color: lightgray;
    }
    .image-card__picture > img {        
        max-height: 15em;
    }
    .image-card__comment {
        position: absolute;
        bottom: 0;
        height: 52px;
        padding: 16px;
        text-align: right;
        background: rgba(0, 0, 0, 0.5);
    }
    .image-card__comment > span {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
</style>