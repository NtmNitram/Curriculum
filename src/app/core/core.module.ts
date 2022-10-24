import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
    declarations:[
    HeaderComponent,
    AsideComponent,
    ContentComponent
  ],
  exports:[
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    CommonModule
  ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})

export class CoreModule { }