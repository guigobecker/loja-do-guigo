<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import NavBar from "../components/NavBar.vue";

interface Produto {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const produto = ref<Produto>();
const router = useRouter();

function destroyProduto(id: number) {
  fetch("https://fakestoreapi.com/products/" + id, {
    method: "DELETE",
  });
  alert("Produto deletado com sucesso. (Mentira ele vai continuar aparecendo)");
  router.push({ name: "Index" });
}

onMounted(() => {
  const id = router.currentRoute.value.params.id;
  fetch("https://fakestoreapi.com/products/" + id)
    .then((res) => res.json())
    .then((json) => (produto.value = json))
    .then((json) => console.log(json));
});
</script>

<template>
  <div class="container">
    <NavBar />
    <div class="mt-20">
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <img
          :src="produto?.image"
          class="w-full aspect-[1/1] rounded-lg object-cover object-top border border-gray-200"
        />
        <h5 class="text-2xl font-bold tracking-tight text-gray-900">
          {{ produto?.title }}
        </h5>
        <h4 class="mb-3 text-l font-medium tracking-tight text-gray-900">
          {{ produto?.category }}
        </h4>
        <h4 class="mb-3 text-l font-medium tracking-tight text-gray-900">
          {{ produto?.rating.rate }}
        </h4>
        <h4 class="mb-3 text-l font-medium tracking-tight text-gray-900">
          {{ produto?.rating.count }}
        </h4>
        <p class="mb-3 font-normal text-gray-700">{{ produto?.description }}</p>
        <div class="space-x-2">
          <RouterLink
            :to="{ name: 'Edit', params: { id: produto?.id } }"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Editar
          </RouterLink>
          <button
            @click="produto?.id && destroyProduto(produto.id)"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
