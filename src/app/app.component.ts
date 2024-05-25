import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { TituloComponent } from './Components/titulo/titulo.component'; 
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './Components/contacto/contacto.component'; 
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
// import { MessageService } from 'primeng/api';
// import { ToastModule } from 'primeng/toast';
// import { ButtonModule } from 'primeng/button';
// import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, TituloComponent, 
    SobreMiComponent, ContactoComponent, ProyectosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [MessageService]
})
export class AppComponent {
  title = 'Proyecto-Angular';
}

// export class ToastBasicDemo {
//   constructor(private messageService: MessageService) {}

//   show() {
//       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
//   }
// }