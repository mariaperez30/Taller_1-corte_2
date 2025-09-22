import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { User } from './services/user/user';
import { Uuid } from './providers/uuid/uuid';


const services = [User];
const providers = [Storage, Uuid];




@NgModule({
  declarations: [InputComponent, CardComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [InputComponent, CardComponent, ButtonComponent, ReactiveFormsModule, FormsModule],

  providers: [services, providers],
})

export class SharedModule { }
