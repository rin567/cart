<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<div>
		<input type="checkbox" v-model="cartStore.install" />
		<div>
			<img src="~/assets/install.svg" alt="install" />
			<h4>Установка</h4>
			<p>
				Отметьте, если Вам необходима консультация профессионала по монтажу
				выбранных товаров.
			</p>
		</div>
	</div>
</template>
