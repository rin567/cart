<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<img src="~/assets/cart.svg" alt="cart" />
	<h4>Ваша корзина</h4>
	<span>{{ cartStore.getTotalCount }}</span>
	<span>{{ cartStore.getTotalPrice }}</span>
</template>
