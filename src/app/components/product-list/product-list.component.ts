import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    productsList: Product[] = [];
    constructor(private data: ProductService) {}

    ngOnInit(): void {
        console.log('--- ngOnInit :: ');
        this.getProducts().then();
    }
    async getProducts(): Promise<void> {
        this.productsList = await this.data.getProducts();
    }
}
