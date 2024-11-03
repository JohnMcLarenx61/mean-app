export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
  }

export const products = [
    { id: 1, name: 'iPhone', description: 'みんなが待っていたiPhone、ついに登場', price: 599, stock: 100 },
    { id: 2, name: 'iPad', description: '革命的で魔法のようなデバイス。しかも、信じられない価格で。', price: 499, stock: 200 },
    { id: 3, name: 'MacBook Air', description: '世界最薄のノートブック', price: 1799, stock: 50 },
    { id: 4, name: 'iPod', description: '1000曲をポケットに。', price: 399, stock: 300 }
];
