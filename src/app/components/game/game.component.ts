import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  constructor() { }

champions = ['Aatrox','Ahri','Akali','Alistar','Amumu','Anivia','Annie','Ashe','Aurelion','Azir','Bardo','Blitzcrank'
,'Brand','Braum','Caitlyn','Camille','Cassiopeia','Cho Gath','Corki','Darius','Diana','Dr. Mundo','Draven'
,'Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio','Gangplank','Garen','Gnar','Gragas'
,'Graves','Hecarim','Heimerdinger','Illaoi','Irelia','Ivern','Janna','Jarvan IV','Jax','Jayce','Jhin','Jinx'
,'Kalista','Karma','Karthus','Kassadin','Katarina','Kayle','Kayn','Kennen','Kha Zix','Kindred','Kled','Kog Maw'
,'LeBlanc','Lee Sin','Leona','Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','Master Yi','Miss Fortune'
,'Mordekaiser','Morgana','Nami','Nasus','Nautilus','Nidalee','Nocturne','Nunu','Olaf','Orianna','Ornn','Pantheon','Poppy'
,'Quinn','Rakan','Rammus','Rek sai','Renekton','Rengar','Riven','Rumble','Ryze','Sejuani','Shaco','Shen','Shyvana','Singed'
,'Sion','Sivir','Skarner','Sona','Soraka','Swain','Syndra','Tahm Kench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana'
,'Trundle','Tryndamere','Twisted Fate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar','Vel Koz','Vi','Viktor','Vladimir'
,'Volibear','Warwick','Wukong','Xayah','Xerath','Xin Zhao','Yasuo','Yorick','Zac','Zed','Ziggs','Zilean','Zoe','Zyra'];


champion = 'Campeão';
tempo = true;
timeLeft: number = 60;
interval;

startTimer() {
  this.ativar();
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
       console.log("tocar bip!");
       this.pauseTimer();
      }
    },1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ativar(){
    this.tempo=!this.tempo;
  }

  rodar(){
    this.ativar();
    this.pauseTimer();
    this.timeLeft = 60;
    this.champion = this.champions[Math.floor(Math.random() * this.champions.length)];
  }

}
