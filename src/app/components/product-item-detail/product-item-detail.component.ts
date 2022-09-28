import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product, ProductService } from 'src/app/product.service';
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
        // this.route.queryParams.subscribe((params) => {
        //   this.id = params['id'];
        // });
        this.updateProduct();
        // console.log('--- id :: ', this.id);
    }

    async updateProduct() {
        this.product = await this.productService.getProduct(this.id);
        // console.log('--- productItem :: ', this.product);
        return this.product;
    }
}