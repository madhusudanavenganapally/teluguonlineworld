import { Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Home route
    { path: 'register', component: StudentRegistrationComponent }, //Student Registeration Route
    { path: 'contact', component: ContactUsComponent } // Contact US Route
];
