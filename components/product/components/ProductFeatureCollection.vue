<template>
    <div class="hs-product-feature-collection">
        <ul class="hs-product-feature-collection_list">
            <li v-for="feature in features" class="hs-product-feature-collection_list-item">
                <img
                    class="hs-product-feature-collection_image"
                    :src="feature.image.src"
                    :alt="feature.image.alt"
                />
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
