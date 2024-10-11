import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArquivosEtapaComponent } from "./componentes/arquivos-etapa/arquivos-etapa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArquivosEtapaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ciclo1Alisson';
}
