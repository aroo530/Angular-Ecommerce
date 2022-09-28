import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: Product[] = [];
    constructor(private http: HttpClient) {}

    getProducts(): Promise<Product[]> {
        const url = 'assets/data.json';
        return lastValueFrom(this.http.get<Product[]>(url));
    }

    async getProduct(id: number): Promise<Product> {
        const tmp: Product[] = await this.getProducts();
        // console.log('--- tmp :: ', tmp);
        const result: Product = tmp.find((p: Product) => {
            // console.log('--- p :: ', typeof id, typeof p.id);

            return p.id === Number(id);
        })!;
        // console.log('--- result :: ', result);
        return result;
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
