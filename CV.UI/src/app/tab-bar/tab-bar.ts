import { Component, effect, Input, signal, WritableSignal } from '@angular/core';
import { TabBarManager } from '../services/tab-bar-manager';
import { Button } from '../models/button';

@Component({
  selector: 'tab-bar',
  imports: [],
  templateUrl: './tab-bar.html',
  styleUrl: './tab-bar.scss'
})
export class TabBar {
  constructor(public tabBarManager: TabBarManager) {
    effect(() => {
      if (this.buttons().length) {
        this.tabBarManager.selectTab(this.buttons()[0]);
      }
    })
  }

  @Input()
  buttons: WritableSignal<Button[]> = signal([]);

  handleTabClick(button: Button) {
    this.tabBarManager.selectTab(button);
  }
}
