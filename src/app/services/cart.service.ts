import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ProductService, Product } from './product.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[] = [];
    clientName: string = '';
    totalPrice: number = 0;

    product: Product = {
        id: 0,
        name: '',
        price: 0,
        description: '',
        url: '',
        quantity: 0,
    };

    constructor(
        private productService: ProductService,
        private localStorage: LocalStorageService
    ) {
        this.cart = this.localStorage.getCart();
    }
    emptyCart() {
        this.cart = [];

        this.localStorage.setCart(this.cart);
    }
    async addToCart(tmpQuantity: number, tmpId: number) {
        const tmpProduct = await this.productService.getProduct(tmpId);
        if (!tmpProduct) return;
        let index = this.getIndex(tmpProduct.id);

        if (index === -1) {
            tmpProduct.quantity = Number(tmpQuantity);
            this.cart.push(tmpProduct);
        } else {
            this.cart[index].quantity =
                Number(this.cart[index].quantity) + Number(tmpQuantity);
        }

        this.localStorage.setCart(this.cart);
    }

    getCart(): Product[] {
        return this.cart;
    }

    removeProduct(product: Product) {
        let index = this.getIndex(product.id);
        this.cart.splice(index, 1);

        this.localStorage.setCart(this.cart);
    }
    getTotal(): number {
        let total = 0;

        this.cart.forEach((p: Product) => {
            total += Number(p.price * (p.quantity ?? 1));
        });

        this.totalPrice = total;
        return this.totalPrice;
    }

    updateQuantity(quantity: number, product: Product) {
        this.product.quantity = Number(quantity);
        let index = this.getIndex(product.id);
        this.cart[index].quantity = this.product.quantity;

        this.localStorage.setCart(this.cart);
    }
    getIndex(id: number): number {
        return this.cart.findIndex((p: Product) => p.id === id);
    }
}
