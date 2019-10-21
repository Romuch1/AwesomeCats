import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalComponent } from './components/modal/modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { AnalyticsService } from './services/analytics.service';
import { AuthService } from './services/auth.service';
import { LoggerService } from './services/logger.service';
import { ModalService } from './services/modal.service';
import { SpinnerService } from './services/spinner.service';
import { TitleService } from './services/title.service';
import { ToastService } from './services/toast.service';

import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

@NgModule({
  declarations: [
    ModalComponent,
    SpinnerComponent,
    ToastComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ModalComponent,
    SpinnerComponent,
    ToastComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AnalyticsService,
    AuthService,
    LoggerService,
    ModalService,
    SpinnerService,
    TitleService,
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
      }
  }
}
