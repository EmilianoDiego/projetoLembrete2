import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LembreteListaComponent } from './lembretes/lembrete-lista/lembrete-lista.component';
import { LembreteInserirComponent } from './lembretes/lembrete-inserir/lembrete-inserir.component';
import { PaginaLembreteComponent } from './paginas/pagina-lembrete/pagina-lembrete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: PaginaLembreteComponent, canActivate: [AuthGuardService] },
  { path: 'criar', component: LembreteInserirComponent, canActivate: [AuthGuardService] },
  { path: 'editar/:idLembrete', component: LembreteInserirComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [LembreteInserirComponent, LembreteListaComponent, LoginComponent]