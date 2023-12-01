<script setup>
    import { computed, onMounted } from 'vue';
    import store from '../store';

    onMounted(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => console.log(json));
    });
</script>

<template>
    <div>
    </div>
</template>