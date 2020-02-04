import { NgModule } from '@angular/core';
import { ListasComponent } from './listas/listas.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        ListasComponent
    ],
    exports: [
        ListasComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        PipesModule
    ]
})
export class ComponentsModule { }
