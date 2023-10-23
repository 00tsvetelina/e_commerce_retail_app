import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router'
import { PageNotFoundComponent } from "./page-not-found.component";
import { WelcomeComponent } from "./home/welcome.component";
import { SelectiveStrategy } from "./user/selective-strategy.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { AuthGuard } from "./user/auth.guard";

@NgModule({
    imports: [ 
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'products', 
            //   canActivate: [AuthGuard],
              data: {preload: true},
              loadChildren: () =>  
              import('./products/product.module').then(m=>m.ProductModule)
            },
            { path: 'cart', component: CartComponent },
            { path: 'shipping', component: ShippingComponent},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], {preloadingStrategy: SelectiveStrategy})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }