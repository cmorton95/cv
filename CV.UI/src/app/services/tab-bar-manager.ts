import { Injectable, signal } from '@angular/core';
import { Button } from '../models/button';

@Injectable({
  providedIn: 'root'
})
export class TabBarManager {
  private _selectedTab = signal<Button>({name: '', route: ''});
  selectedTab = this._selectedTab.asReadonly();

  selectTab(button: Button) {
    this._selectedTab.set(button);
  }
}
