<template>
    <nav class="hs-header">
        <div class="hs-header-mobile">
            <p>{{ title }}</p>
            <p>Reviews</p>
            <p>About Us</p>
            <p>Showroom</p>
            <p>Swatches</p>
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