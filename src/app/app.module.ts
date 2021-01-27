import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { environment } from '../environments/environment';
import { reducers } from './shared/state/app.reducer';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const ROOT_REDUCER = new InjectionToken<any>('Root Reducer');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HomeModule,
    BookmarksModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
    BrowserAnimationsModule,  
  ],
  providers: [
    {provide: ROOT_REDUCER, useValue: { config: reducers.config, router: reducers.router }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
