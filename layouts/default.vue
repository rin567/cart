<template>
	<header>
		<div>Главная Корзина</div>
		<YourCart></YourCart>
	</header>
	<main>
		<slot />
	</main>
	<footer><Swiper /></footer>
</template>
<style lang="scss">
header {
	display: flex;
	justify-content: space-between;
}
</style>
