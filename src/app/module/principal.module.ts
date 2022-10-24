import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations:[
        PrincipalComponent
    ],
    imports:[
        CommonModule,
        PrincipalRoutingModule,
        CoreModule
    ],
    exports:[
        
    ]

})

export class PrincipalModule {}