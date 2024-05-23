import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SatDatepickerModule } from '../../saturn-datepicker/src/datepicker';
import { SatNativeDateModule } from '../../saturn-datepicker/src/datetime';
import { AppComponent } from './app.component';
import { RangesFooter } from './ranges-footer.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        AppComponent,
        RangesFooter
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, ReactiveFormsModule,
        MatNativeDateModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, SatDatepickerModule, SatNativeDateModule
    ],
    entryComponents: [RangesFooter],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
