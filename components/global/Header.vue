<template>
    <div class="hs-header">
        <div class="hs-header-mobile">
            <p>{{ title }}</p>
            <p>Reviews</p>
            <p>About Us</p>
            <p>Showroom</p>
            <p>Swatches</p>
            <h1>Active Image: {{ $store.state.active_product.image.alt }}</h1>
            <h1>Active Price: {{ $store.state.active_product.price }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String,
                default: "Default Title"
            }
        }
    }
</script>