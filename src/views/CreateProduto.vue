<script setup lang="ts">
import { reactive } from "vue";
import NavBar from "../components/NavBar.vue";
import { useRouter } from "vue-router";

interface Produto {
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

const router = useRouter();

function createProduto(produto: Produto) {
  fetch("https://fakestoreapi.com/products/", {
    method: "POST",
    body: JSON.stringify({
      title: produto.title,
      price: produto.price,
      description: produto.description,
      image: produto.image,
      category: produto.category,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
    if (
    produto.title == "" ||
    produto.price == 0 ||
    produto.description == "" ||
    produto.image == "" ||
    produto.category == ""
  ) {
    alert("Valor inválido, tente novamente.");
    return;
  } else {
    router.push({ name: "Index" });
    alert("Produto criado com sucesso! (Mentira ele não vai aparecer)");
  }

}

const form = reactive({
  title: "",
  price: 0,
  description: "",
  image: "",
  category: "",
});
</script>

<template>
  <div>
    <NavBar />
    <div class="mt-20">
      <form
        action=""
        class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
        @submit.prevent="createProduto(form)"
      >
        <div class="space-y-6">
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Título</label
            >
            <input
              type="text"
              id="title"
              v-model="form.title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Preço</label
            >
            <input
              type="number"
              id="price"
              v-model="form.price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Descrição</label
            >
            <input
              type="text"
              id="description"
              v-model="form.description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <label
            for="image"
            class="block mb-2 text-sm font-medium text-gray-900"
            >URL da imagem</label
          >
          <input
            id="image"
            v-model="form.image"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="category"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Categoria</label
          >
          <input
            type="text"
            id="category"
            v-model="form.category"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>
