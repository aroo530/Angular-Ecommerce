import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: Product[] = [];
    constructor(private http: HttpClient) {}

    getProducts(): Promise<Product[] | undefined> {
        const url = 'assets/data.json';
        const src$ = this.http.get<Product[]>(url);
        return lastValueFrom(src$);
    }

    async getProduct(id: number): Promise<Product | undefined> {
        const tmp = await this.getProducts();
        if (!tmp) return;
        return tmp.find((p: Product) => p.id === id);
    }
}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    url: string;
    quantity?: number;
};
