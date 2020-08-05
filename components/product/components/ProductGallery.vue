<template>
    <div class="hs-product-gallery">
        <ProductHeader
            :availability="availability"
        />
        <div class="hs-product-primary-image">
        </div>
        <ProductFeatureCollection
            :features="features"
        />
    </div>
</template>

<script>
    import ProductHeader from "./ProductHeader";
    import ProductFeatureCollection from "./ProductFeatureCollection";
    export default {
        name: "ProductGallery",
        components: {
            ProductFeatureCollection,
            ProductHeader
        },
        props: {
            availability: {
                type: String
            },
            features: {
                type: Array
            }
        }
    }
</script>

<style>

</style>