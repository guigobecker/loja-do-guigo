<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

interface Produto {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    price: number;
}

const produto = ref<Produto>({
    id: 0,
    image: "",
    title: "",
    category: "",
    description: "",
    price: 0,
});

const router = useRouter();

function updateProduto(id: number) {
    fetch("https://fakestoreapi.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify({
            title: produto.value.title,
            price: produto.value.price,
            description: produto.value.description,
            image: produto.value.image,
            category: produto.value.category
        })
    })
        .then((res) => res.json())
        .then((json) => console.log(json));
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
    <div>
        <form
            action=""
            class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
            @submit.prevent="produto.id && updateProduto(produto.id)"
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
                        v-model="produto.title"
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
                        v-model="produto.price"
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
                        v-model="produto.description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <label
                    for="image"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >URL da imagem</label
                >
                <input
                    type="text"
                    id="image"
                    v-model="produto.image"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <div class="mb-6">
                    <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Categoria</label
                    >
                    <input
                        type="text"
                        id="category"
                        v-model="produto.category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <button
                  type="submit"
                  class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Salvar
                </button>
            </div>
        </form>
    </div>
</template>