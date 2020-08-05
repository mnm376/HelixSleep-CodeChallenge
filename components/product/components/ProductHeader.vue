<template>
    <div class="hs-product-header">
        <div class="hs-secure-checkout"></div>
        <div class="hs-availability">
            <div class="hs-availability_text">{{ availability }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductHeader",
        props: {
            availability: {
                type: String,
                default: "Available"
            }
        }
    }
</script>