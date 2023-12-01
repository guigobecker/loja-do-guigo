<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

const produtos = ref([]);

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => (produtos.value = json))
    .then((json) => console.log(json));
});
</script>

<template>
  <div class="container">
    <div class="flex justify-end mb-2 pb-2">
      <RouterLink
        :to="{ name: 'Home' }"
        class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >Novo Produto</RouterLink
      >
    </div>
    <div class="max-w-7xl mx-auto">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-center text-black mb-10">
          <tbody>
            <tr
              v-for="produto in produtos"
              :key="produto.id"
              class="bg-white border-b hover:bg-gray-100"
            >
              <RouterLink
                :to="{ name: 'Home', params: { id: produto.id } }"
                class="block"
              >
                <td class="flex gap-x-4 items-center py-4 pl-10">
                  <img
                    :src="produto.image"
                    class="w-20 aspect-[1/1] rounded-lg object-cover object-top border border-gray-200"
                  />
                  <span>{{ produto.title }}</span>
                </td>
              </RouterLink>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
