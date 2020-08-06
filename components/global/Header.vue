<template>
    <nav class="hs-header">
        <div class="hs-header-mobile">
            <span>{{ title }}</span>
            <span>Reviews</span>
            <span>About Us</span>
            <span>Showroom</span>
            <span>Swatches</span>
        </div>
    </nav>
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