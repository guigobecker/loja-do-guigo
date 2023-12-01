<script setup>
    import { computed } from 'vue';
    import store from '../store';

    const produtos = computed(() => store.state.produtos);
</script>

<template>
    <div>
        <pre>{{ produtos }}</pre>
    </div>
</template>