<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<ul class="cartList">
		<CartItem
			v-for="cartItem in cartStore.cartList"
			:key="cartItem.id"
			:cartItem="cartItem"
		/>
	</ul>
</template>
