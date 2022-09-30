import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-product-item-detail',
    templateUrl: './product-item-detail.component.html',
    styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
    id = 0;

    product: Product = {
        id: 0,
        name: '',
        price: 0,
        description: '',
        url: '',
    };

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.updateProduct();
    }

    async updateProduct() {
        let tmp = await this.productService.getProduct(this.id);
        console.log(tmp);
        if (tmp) {
            this.product = tmp;
        }
        return this.product;
    }
}
