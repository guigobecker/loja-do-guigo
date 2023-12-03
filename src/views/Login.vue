<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const loginError = ref(false);

const router = useRouter();

const login = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();

    const isValidUser = users.some(
      (user: { username: string; password: string }) =>
        user.username === username.value && user.password === password.value
    );

    if (isValidUser) {
      console.log("Login realizado com sucesso.");
      router.push({ name: "Index" });
      loginError.value = false;
    } else {
      loginError.value = true;
    }
  } catch (error) {
    console.error("Erro ao acessar usuários:", error);
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <form @submit.prevent="login" class="max-w-xl w-full mx-auto">
      <div class="mb-5">
        <label
          for="usuario"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Usuário</label
        >
        <input
          v-model="username"
          id="usuario"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div class="mb-5">
        <label for="senha" class="block mb-2 text-sm font-medium text-gray-900"
          >Senha</label
        >
        <input
          v-model="password"
          type="password"
          id="senha"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Login
      </button>
    </form>
    <div
      v-if="loginError"
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <span class="font-medium">Usuário e/ou senha inválidos.</span> Tente novamente.
    </div>
  </div>
</template>
