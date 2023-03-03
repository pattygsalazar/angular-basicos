//
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({

    //declaracion de componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
// cosas que quiero hacer publicas o visibles
    exports: [
        ListadoComponent
    ],
//adentro van los modulos 
    imports: [
        CommonModule

    ]

    


})

export class HeroesModule{}