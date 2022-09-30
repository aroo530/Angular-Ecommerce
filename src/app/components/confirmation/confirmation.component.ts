import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
    constructor(
        private cartService: CartService,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    name = this.cartService.clientName;
    total = this.cartService.totalPrice;
    ngOnInit(): void {}
    toProduct() {
        this.router.navigate([''], { relativeTo: this.route });
    }
}
