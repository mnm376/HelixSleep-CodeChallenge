<template>
    <div class="hs-product-info">
        <div class="hs-product-info_container">
            <ProductGallery
                :features="product.features"
                :availability="product.availability"
            />
            <ProductDetail
                v-bind="product"
            />
        </div>
    </div>
</template>

<script>
    import ProductGallery from "./components/ProductGallery";
    import ProductDetail from "./components/ProductDetail";
    export default {
        name: "ProductInfo",
        components: {
            ProductGallery,
            ProductDetail
        },
        props: {
            product: {
                type: Object
            }
        },
    }
</script>
