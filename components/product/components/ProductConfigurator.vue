<template>
    <div class="hs-product-configurator">
        <div class="hs-product-configurator_container">
            <div class="hs-product-configurator_intro">
                <div class="hs-product-configurator_intro-title">1. {{ configurator["selection-text"] }}</div>
                <div class="hs-product-configurator_intro-detail">{{ configurator["selection-text-detail"] }}</div>
            </div>
            <div class="hs-product-configurator_selection">
                <div class="hs-product-configurator_selection-title">{{ configurator.type }}</div>
                <ul class="hs-product-configurator_selection-choices">
                    <ProductSelectBox
                        v-for="product in configurator.selection"
                        :key="product.id"
                        :product="product"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductSelectBox from "./ProductSelectBox";
    export default {
        name: "ProductConfigurator",
        components: {ProductSelectBox},
        props: {
            configurator: {
                type: Object
            }
        }
    }
</script>