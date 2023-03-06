import { ProductComponent } from './product/product.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  {path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'chatbot', component: ChatbotComponent },
  {path: 'item/:id', component: ProductComponent},
  { path: 'not-found', component: ErrorpageComponent, data: {message: 'Page Not Found'} },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
