interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
	count: number
	about?: string
}

const cartListDefautValue: Array<IItem> | [] = []
const viewedListDefautValue: Array<IItem> | [] = []

export const useCartStore = defineStore('cartStore', () => {
	const cartList = ref(cartListDefautValue)
	const install = ref(false)

	const getCartList = async () => {
		const { data } = await useAsyncData('cartList', () => $fetch('/api/cart'))
		data.value ? (cartList.value = Object.values(data.value)) : []
	}

	const deleteAll = () => {
		cartList.value = []
	}

	const deleteItem = (id: number) => {
		cartList.value = cartList.value.filter(el => el.id !== id)
	}

	const increment = (id: number) => {
		cartList.value = cartList.value.map(item => {
			if (item.id === id) item.count += 1
			return item
		})
	}
	const decrement = (id: number, count: number) => {
		if (count === 1) {
			deleteItem(id)
		} else {
			cartList.value = cartList.value.map(item => {
				if (item.id === id) item.count -= 1
				return item
			})
		}
	}

	const getTotalCount = computed(() => {
		let totalCount = 0
		cartList.value.forEach(item => {
			totalCount += item.count
		})
		return totalCount
	})
	const getTotalPrice = computed(() => {
		let totalPrice = 0
		cartList.value.forEach(item => {
			totalPrice += item.count * item.price
		})
		return totalPrice
	})

	return {
		install,
		cartList,
		deleteItem,
		getTotalCount,
		getTotalPrice,
		deleteAll,
		increment,
		decrement,
		getCartList,
	}
})

export const useViewedStore = defineStore('viewedStore', () => {
	const viewedList = ref(viewedListDefautValue)
	const currentPage = ref(1)
	const getViewedList = async () => {
		const { data } = await useAsyncData('viewedList', () =>
			$fetch('/api/viewed')
		)
		data.value ? (viewedList.value = Object.values(data.value)) : []
	}

	return {
		viewedList,
		currentPage,
		getViewedList,
	}
})
