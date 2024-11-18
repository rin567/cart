export interface IItem {
	id: number
	name: string
	price: number
	image: string
	type: string
	article: string
}
export interface IList {
	[id: number]: IItem
}
