import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-select-add',
    templateUrl: './select-add.component.html',
    styleUrls: ['./select-add.component.css'],
})
export class SelectAddComponent implements OnInit {
    @Input('id') productId: number = 0;
    cartForm = this.formBuilder.group({
        quantity: 1,
    });
    constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService
    ) {}

    ngOnInit(): void {}

    addToCart() {
        // this.cartForm.value.quantity
        this.cartService.addToCart(
            this.cartForm.value.quantity ?? 1,
            this.productId
        );
        alert('Added to cart');
    }
}
