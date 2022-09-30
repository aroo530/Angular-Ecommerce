import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {
        if (localStorage.getItem('cart') === null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }
    getCart(): any {
        return JSON.parse(localStorage.getItem('cart')!);
    }
    setCart(cart: any): void {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    emptyCart(): void {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}
