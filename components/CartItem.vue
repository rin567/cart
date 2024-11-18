<script setup lang="ts">
interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
	count: number
}
defineProps<{
	cartItem: IItem
}>()
const cartStore = useCartStore()
</script>
<template>
	<li class="cartItem">
		<img :src="cartItem.image" :alt="cartItem.name" />
		<div>
			<h3>{{ `${cartItem.type} ${cartItem.name}` }}</h3>
			<p>12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия</p>
			<p>Aртикул: {{ cartItem.article }}</p>
		</div>
		<div class="quantityItem">
			<button
				@click="cartStore.decrement(cartItem.id)"
				class="quantityItem__buttonLeft"
			>
				-
			</button>
			<div class="quantityItem__total">{{ cartItem.count }}</div>
			<button
				@click="cartStore.increment(cartItem.id)"
				class="quantityItem__buttonRigth"
			>
				+
			</button>
		</div>
		<div>{{ cartItem.price * cartItem.count }}</div>
		<button
			@click="cartStore.deleteItem(cartItem.id)"
			class="cartItem__delete"
		></button>
	</li>
	<hr />
</template>
