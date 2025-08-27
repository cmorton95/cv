import { Component, effect, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TabBar } from './tab-bar/tab-bar';
import { TabBarManager } from './services/tab-bar-manager';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Connor Morton');
  protected readonly buttons = signal([
    {name: 'Home', route: 'home'},
    {name: 'About Me', route: 'about'},
    {name: 'Links', route: 'links'}
  ]);

  constructor(
    private tabBarManager: TabBarManager,
    private router: Router
  ) {
    effect(() => {
      const tab = this.tabBarManager.selectedTab();
      if (tab) {
        this.router.navigate([tab.route]);
      }
    })
  }
}