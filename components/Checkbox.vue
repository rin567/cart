<script setup lang="ts">
const cartStore = useCartStore()
</script>
<template>
	<div class="checkbox">
		<input type="checkbox" v-model="cartStore.install" />

		<img src="~/assets/install.svg" alt="install" />
		<div class="checkbox__text">
			<h2>Установка</h2>
			<p>
				Отметьте, если Вам необходима консультация профессионала по монтажу
				выбранных товаров.
			</p>
		</div>
	</div>
</template>
