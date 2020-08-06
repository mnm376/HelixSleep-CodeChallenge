<template>
    <div class="hs-product-gallery">
      <ProductHeader :availability="availability"/>
      <div class="hs-product-gallery_image-container">
        <img
            class="hs-product-gallery_image"
            :src="this.$store.state.active_product.image.src"
            :alt="this.$store.state.active_product.image.alt"
        />
      </div>
      <ProductFeatureCollection :features="features"/>
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