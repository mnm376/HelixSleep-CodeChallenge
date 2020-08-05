<template>
    <div class="hs-vue-app">
        <Header
            :title="product.title"
        />
        <ProductInfo
            :product="product"
        />
    </div>
</template>

<script>
    import Header from "../../components/global/Header";
    import ProductInfo from "../../components/product/ProductInfo";
    import product from "../../data/products/the-sofa.json";

    export default {
        components: {
            Header,
            ProductInfo
        },
        data: function () {
            return {
                product: product,
            }
        },
        head () {
            return {
                title: product.title
            }
        }

    }
</script>