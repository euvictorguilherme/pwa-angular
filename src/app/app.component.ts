import { Component } from '@angular/core';
import { PwaService } from './services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'League of legends';
  deferredInstallPrompt;
  install=true;
  interval

  constructor( private pwa: PwaService) {}


  installPwa(): void {
    this.pwa.promptEvent.prompt();
    this.install = false;
  }

  ocultar(){
    this.install = false;
  }

}
