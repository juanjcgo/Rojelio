import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
    {
        path: '', // Si es hijo se debe dejar vacia
        component: ContactsComponent
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ContactsRoutingModule {
}
