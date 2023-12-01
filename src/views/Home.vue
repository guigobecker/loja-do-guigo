<script setup>
    import { computed, onMounted, ref } from 'vue';
    import store from '../store';

    const produtos = ref([]);

    onMounted(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => (produtos.value = json))
          .then((json) => console.log(json));
    });
</script>

<template>
    <div>
        <pre>{{ produtos }}</pre>
    </div>
</template>