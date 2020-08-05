<template>
    <div class="hs-product-detail">
        <ProductTitle
            :title="title"
            :description="description"
        />
        <ProductAddToCart/>
        <ProductConfigurator
            :configurator="configurator"
        />

    </div>
</template>

<script>
    import ProductTitle from "./ProductTitle";
    import ProductAddToCart from "./ProductAddToCart";
    import ProductConfigurator from "./ProductConfigurator";
    export default {
        name: "ProductDetail",
        components: {
            ProductConfigurator,
            ProductAddToCart,
            ProductTitle
        },
        props: {
            title: {
                type: String
            },
            description: {
                type: String
            },
            configurator: {
                type: Object
            }
        }
    }
</script>