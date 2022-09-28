import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product, ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    confirmForm = this.formBuilder.group({
        name: '',
        address: '',
        creditCard: '',
    });
    product: Product = {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'This is product 1',
        url: '',
        quantity: 0,
    };
    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    addToCart(tmpQuantity: number, tmpId: number) {
        this.cartService.addToCart(tmpQuantity, tmpId);
    }
    getCart(): Product[] {
        return this.cartService.getCart();
    }
    removeProduct(product: Product) {
        this.cartService.removeProduct(product);
    }
    getTotal() {
        return this.cartService.getTotal();
    }
    updateQuantity(event: any, product: Product) {
        // console.log('--- event :: ', event);
        // console.log('--- product :: ', product);
        this.cartService.updateQuantity(event, product);
    }
    confirm() {
        // console.log('--- confirm :: ', this.confirmForm.value);
        localStorage.removeItem('cart');
        this.router.navigate(['/confirm'], { relativeTo: this.route });
    }

    isEmpty(): boolean {
        //add null check for cart in localstorage
        if (localStorage.getItem('cart') === null) {
            return true;
        }
        return this.getCart().length !== 0;
    }
    ngOnInit(): void {}
}
