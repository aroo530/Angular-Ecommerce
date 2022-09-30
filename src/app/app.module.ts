import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { SelectAddComponent } from './components/select-add/select-add.component';
import { ProductService } from './services/product.service';

const routes: Routes = [
    { path: 'cart', component: CartComponent },
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductItemDetailComponent },
    { path: 'confirm', component: ConfirmationComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        HeaderComponent,
        ConfirmationComponent,
        ProductItemComponent,
        ProductItemDetailComponent,
        ProductListComponent,
        SelectAddComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule.forRoot(routes),
    ],
    providers: [ProductService],
    bootstrap: [AppComponent],
})
export class AppModule {}
