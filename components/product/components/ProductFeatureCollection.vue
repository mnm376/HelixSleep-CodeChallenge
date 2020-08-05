<template>
    <div class="hs-product-feature-collection">
        Feature Collection<hr>
        <ul class="hs-feature-list">
            <li v-for="feature in features">
                <img :src=feature.image.src alt=""/> {{ feature.image.src }} || {{ feature.image.alt}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductFeatureCollection",
        props: {
            features: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style>

</style>