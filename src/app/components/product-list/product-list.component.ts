import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    productsList: Product[] = [];
    constructor(private data: ProductService) {}

    ngOnInit(): void {
        this.getProducts().then();
    }
    async getProducts(): Promise<void> {
        let tmp = await this.data.getProducts();
        if (tmp != undefined) {
            this.productsList = tmp;
        }
    }
}
