import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ArqEtapasService } from '../../service/arq-etapas.service';
import { ArqStepsResponse } from '../../models/interfaces/arq-steps-response';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-arquivos-etapa',
  standalone: true,
  imports: [],
  templateUrl: './arquivos-etapa.component.html',
  styleUrl: './arquivos-etapa.component.css'
})
export class ArquivosEtapaComponent implements OnInit, OnDestroy{

  ArqStepsResponse!: ArqStepsResponse[];
  private readonly destroy$:Subject<void> = new Subject();

  ngOnInit(): void {
    initFlowbite();
    this.getArqDasEtapas(1);
  }

  constructor (private StepsArchives : ArqEtapasService) {}

  getArqDasEtapas(id: number): void{
    this.StepsArchives.getArquivosEtapas(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        response && (this.ArqStepsResponse = response)
        console.log(response.ArqStepsResponse);
      },
        error: (error)=> console.log(error),
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}


