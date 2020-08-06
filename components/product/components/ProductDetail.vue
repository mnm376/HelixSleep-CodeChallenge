<template>
    <div class="hs-product-detail">
        <ProductTitle
            :title="title"
            :description="description"
        />
        <ProductAddCart/>
        <ProductConfigurator
            :configurator="configurator"
        />

    </div>
</template>

<script>
    import ProductTitle from "./ProductTitle";
    import ProductAddCart from "./ProductAddCart";
    import ProductConfigurator from "./ProductConfigurator";
    export default {
        name: "ProductDetail",
        components: {
            ProductConfigurator,
            ProductAddCart,
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