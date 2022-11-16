import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HeaderComponent } from './header.component'

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule
    ]
})
export class HeaderModule {
}
