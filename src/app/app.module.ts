import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.model'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
//import { LembreteListaComponent } from './lembretes/lembrete-lista/lembrete-lista.component';
//import { LembreteInserirComponent } from './lembretes/lembrete-inserir/lembrete-inserir.component';
import { PaginaLembreteComponent } from './paginas/pagina-lembrete/pagina-lembrete.component';
import { EfeitoSombraDirective } from './efeito-sombra.directive';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   { path: '', component: LembreteListaComponent },
//   { path: 'criar', component: LembreteInserirComponent },
//   { path: 'editar/:idLembrete', component: LembreteInserirComponent },
//   { path: 'login', component: LoginComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaLembreteComponent,
    EfeitoSombraDirective,
    routingComponents,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule
    //RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],

  exports: [RouterModule],

  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
