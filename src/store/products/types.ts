export interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  category: 'Электроника' | 'Смартфоны' | 'Аксессуары' | 'Портативные колонки' | 'Игровые консоли' | 'Электронные книги',
  availableQuantity: number,
  imageUrl: string
}
