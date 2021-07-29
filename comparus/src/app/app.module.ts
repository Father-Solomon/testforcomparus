import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewGameBtnService } from './services/new-game-btn.service';
import { FieldService } from './services/field.service';
import { MeHeaderComponent } from './components/me-header/me-header.component';
import { MeSidebarComponent } from './components/me-sidebar/me-sidebar.component';
import { MeGameFieldComponent } from './components/me-game-field/me-game-field.component';
import { MeModalComponent } from './components/me-modal/me-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MeHeaderComponent,
    MeSidebarComponent,
    MeGameFieldComponent,
    MeModalComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [NewGameBtnService, FieldService],
  bootstrap: [AppComponent],
})
export class AppModule {}
