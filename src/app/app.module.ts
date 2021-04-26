import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule  } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Acceuil/header/header.component';
import { SectionComponent } from './Acceuil/section/section.component';
import { FooterComponent } from './Acceuil/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './items/contact/contact.component';
import { AgeComponent } from './items/age/age.component';
import { MarqueComponent } from './items/marque/marque.component';
import { HerosComponent } from './items/heros/heros.component';
import { PromotionComponent } from './items/promotion/promotion.component';
import { CategorieComponent } from './items/categorie/categorie.component';
import { NouveauteComponent } from './items/nouveaute/nouveaute.component';
import { AuthenComponent } from './items/authen/authen.component';

import{RegisterValidationService} from './service/register-validation.service';
import{AuthService}from'./service/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SectionComponent,
    FooterComponent,
    ContactComponent,
    AgeComponent,
    MarqueComponent,
    HerosComponent,
    PromotionComponent,
    CategorieComponent,
    NouveauteComponent,
    AuthenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    CarouselModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
    
       {path:'Contact' , component:ContactComponent},
       { path:'Acceuil' , component:NavbarComponent},
       { path:'ages' , component:AgeComponent},
       { path:'marque' , component:MarqueComponent},
       { path:'categorie' , component:CategorieComponent},
       { path:'heros' , component:HerosComponent},
       { path:'promotion' , component:PromotionComponent}, 
       { path:'nouveaute' , component:NouveauteComponent},
       { path:'connexion' , component:AuthenComponent}
    
    ])
  ],
  providers: [
    RegisterValidationService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
