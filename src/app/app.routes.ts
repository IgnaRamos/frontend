import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginAdminComponent } from './pages/Admin/login-admin/login-admin.component';
import { LoginAgendadorComponent } from './pages/Scheduler/login-agendador/login-agendador.component';
import { MenuAdminComponent } from './pages/Admin/menu-admin/menu-admin.component';
import { Menu_AgendadorComponent } from './pages/Scheduler/menu_agendador/menu_Agendador.component';
import { MenuExamenComponent } from './pages/Admin/menuExamen/menuExamen.component';
import { MenuIndicacionComponent } from './pages/Admin/menuIndicacion/menuIndicacion.component';
import { MenuPacienteComponent } from './pages/Admin/menuPaciente/menuPaciente.component';
import { MenuUsuariosComponent } from './pages/Admin/menuUsuarios/menuUsuarios.component';
import { PacienteComponent } from './pages/Scheduler/pacienteScheduler/paciente.component';
import { AddExamComponent } from './pages/Admin/addExam/addExam.component';
import { AddIndicacionComponent } from './pages/Admin/addIndicacion/addIndicacion.component';
import { AddPacienteComponent } from './pages/Admin/addPaciente/addPaciente.component';
import { AddUsuarioComponent } from './pages/Admin/addUsuario/addUsuario.component';
import { VerPacienteComponent } from './pages/Admin/verPaciente/verPaciente.component';
import { VerExamenComponent } from './pages/Admin/verExamen/verExamen.component';
import { VerIndicacionComponent } from './pages/Admin/verIndicacion/verIndicacion.component';
import { VerUsuariosComponent } from './pages/Admin/verUsuarios/verUsuarios.component';

export const routes: Routes = [
    {path: '', component:MainComponent},
    {path: 'admin', component:LoginAdminComponent},
    {path: 'scheduler', component:LoginAgendadorComponent},
    {path: 'menuAdmin', component:MenuAdminComponent},
    {path: 'menuScheduler', component:Menu_AgendadorComponent},
    {path: 'menuExamen', component:MenuExamenComponent},
    {path: 'menuIndicacion', component:MenuIndicacionComponent},
    {path: 'menuPaciente', component:MenuPacienteComponent},
    {path: 'menuUsuarios', component:MenuUsuariosComponent},
    {path: 'pacienteScheduler', component:PacienteComponent},
    {path: 'addExamen', component:AddExamComponent},
    {path: 'addIndicacion', component:AddIndicacionComponent},
    {path: 'addPaciente', component:AddPacienteComponent},
    {path: 'addUsuario', component:AddUsuarioComponent},
    {path: 'verPaciente', component:VerPacienteComponent},
    {path: 'verExamen', component:VerExamenComponent},
    {path: 'verIndicacion', component:VerIndicacionComponent},
    {path: 'verUsuario', component:VerUsuariosComponent},
];
