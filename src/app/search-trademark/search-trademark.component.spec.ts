import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrademarkComponent } from './search-trademark.component';

describe('SearchTrademarkComponent', () => {
  let component: SearchTrademarkComponent;
  let fixture: ComponentFixture<SearchTrademarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrademarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
