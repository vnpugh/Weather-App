import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms'; //import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search/search.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, //add it as an import
        HttpClientModule
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }

