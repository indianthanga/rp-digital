import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnopediaRoutingModule } from './technopedia-routing.module';
import { TechnopediaComponent } from './technopedia.component';
import { HeaderComponent } from '../shared/components/technopedia/header/header.component';
import { FooterComponent } from '../shared/components/technopedia/footer/footer.component';

@NgModule({
  declarations: [TechnopediaComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, TechnopediaRoutingModule],
})
export class TechnopediaModule {}
