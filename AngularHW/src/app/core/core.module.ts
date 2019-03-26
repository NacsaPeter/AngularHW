import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from './components/layout.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [

  ],
  entryComponents: [

  ]
})
export class CoreModule { }
