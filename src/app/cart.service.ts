import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    product: Product = {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'This is product 1',
        url: '',
        quantity: 0,
    };

    async addToCart(tmpQuantity: number, tmpId: number) {
        // console.log('--- tmpQuantity :: ', tmpQuantity);
        // console.log('--- tmpId :: ', tmpId);
        let cart: Product[];
        const tmpProduct: Product = await this.productService.getProduct(tmpId);
        if (localStorage.getItem('cart') === null) {
            // console.log('--- cart is null');
            const tmp: Product[] = [];
            localStorage.setItem('cart', JSON.stringify(tmp));
        }
        cart = JSON.parse(localStorage.getItem('cart')!);
        let index = cart.findIndex((p: Product) => {
            console.log('--- p :: ', p);
            return p.id === tmpProduct.id;
        })!;

        console.log('index ::', index);
        //if the index is larger than -1 means the product is in the carts array
        if (!(index > -1)) {
            tmpProduct.quantity = Number(tmpQuantity);
            cart.push(tmpProduct);
        } else {
            cart[index].quantity =
                Number(cart[index].quantity) + Number(tmpQuantity);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log('--- cart :: ', cart);
    }

    getCart(): Product[] {
        // get from local storage
        let cart: Product[] = JSON.parse(localStorage.getItem('cart')!);
        return cart;
    }

    removeProduct(product: Product) {
        let cart: Product[] = JSON.parse(localStorage.getItem('cart')!);
        let index = cart.findIndex((p: Product) => {
            return p.id === product.id;
        })!;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    getTotal(): number {
        let cart: Product[] = JSON.parse(localStorage.getItem('cart')!);
        let total: number = 0;
        cart.forEach((p: Product) => {
            total += Number(p.price! * p.quantity!);
        });
        return total;
    }

    updateQuantity(event: any, product: Product) {
        // console.log('--- onKeyup :: ', event.target.value);
        this.product.quantity = Number(event.target.value);
        // console.log('--- updateQuantity :: ', product, event.target.value);

        let cart: Product[] = JSON.parse(localStorage.getItem('cart')!);
        let index = cart.findIndex((p: Product) => {
            return p.id === product.id;
        })!;
        cart[index].quantity = event.target.value;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    constructor(private productService: ProductService) {}
}
