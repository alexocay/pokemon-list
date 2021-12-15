import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from 'src/shared/material.module';
import { MatSortModule } from '@angular/material/sort'; //Brings action to order the table when the user press the arrow
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { SpinnerInterceptor } from 'src/shared/interceptor/spinner.interceptor'; //Interceptor shared
import { SpinnerModule } from 'src/shared/spinner/spinner.module'; //Spinner shared

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokeTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    SpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
