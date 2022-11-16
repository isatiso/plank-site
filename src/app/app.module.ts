import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderModule } from './components/header/header.module'
import { FooterModule } from './components/footer/footer.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        FooterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
