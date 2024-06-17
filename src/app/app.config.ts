import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"scoreboard-2-f45f3","appId":"1:568362728253:web:a9a99890831e439a08a354","storageBucket":"scoreboard-2-f45f3.appspot.com","apiKey":"AIzaSyC5QUgj-SNqngY1csq0AzIV_oNu2X1E-m4","authDomain":"scoreboard-2-f45f3.firebaseapp.com","messagingSenderId":"568362728253","measurementId":"G-LEJPHYNT31"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
