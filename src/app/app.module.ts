import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { DataService } from './data.service';
import { LoginService } from './login.service';
import { AppRoutingModule } from './routing/routing.module';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';

import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';

import { YummlyService } from './yummly.service';
import { YummlyComponent } from './yummly/yummly.component';
import { LoginComponent } from './login/login.component';
import { PantryFormComponent } from './pantry-form/pantry-form.component';
import { YummlyDetailsComponent } from './yummly-details/yummly-details.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { IngredientDialogFormComponent } from './ingredient-dialog-form/ingredient-dialog-form.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DeleteConfirmComponent,
    StatusMessageComponent,
    RecipesComponent,
    RecipesFormComponent,
    IngredientFormComponent,
    YummlyComponent,
    PantryFormComponent,
    YummlyDetailsComponent,
    RecipeDetailsComponent,
    IngredientDialogFormComponent,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    DeleteConfirmComponent,
    RecipeDetailsComponent,
    YummlyDetailsComponent,
    IngredientDialogFormComponent
  ],
  providers: [
    DataService,
    YummlyService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
