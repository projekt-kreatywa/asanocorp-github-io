import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AsanoCorpComponent } from './asano-corp/asano-corp.component';
import { PastebinComponent } from './pastebin/pastebin.component';

export const router: Routes = [
    { path: '', redirectTo: 'asano-corp', pathMatch: 'full' },
    { path: 'asano-corp', component: AsanoCorpComponent },
    { path: 'pastebin', component: PastebinComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
