import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '../../app.routing';
import { BudgetService } from './budget.service';

@NgModule({
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
    ],
    providers: [
        BudgetService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class BudgetModule { }
