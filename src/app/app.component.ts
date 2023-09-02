import { Component } from '@angular/core';
import { ISounds } from './interface/sounds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'MP3-player-app';
  public displayedColumns: string[] = ['id', 'name', 'filename'];
  public selectedRow!: number;
  public selectedSound: string | null = null;

  public sounds: ISounds[] = [
    { id: 1, name: 'Звук 1', fileName: 'sound-1.mp3' },
    { id: 2, name: 'Звук 2', fileName: 'sound-2.mp3' },
    { id: 3, name: 'Звук 3', fileName: 'sound-3.mp3' },
    { id: 4, name: 'Звук 4', fileName: 'sound-4.mp3' },
  ];


  public playSound(soundList: ISounds): void {
    this.selectedSound = `assets/sounds/${soundList.fileName}`;
    this.selectedRow = soundList.id;
  }

  public deletePlayer(): void {
    this.selectedSound = null;
    this.selectedRow = 0;
  }
}
