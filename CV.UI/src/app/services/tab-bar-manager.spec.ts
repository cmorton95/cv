import { TestBed } from '@angular/core/testing';

import { TabBarManager } from './tab-bar-manager';

describe('TabBarManager', () => {
  let service: TabBarManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabBarManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
