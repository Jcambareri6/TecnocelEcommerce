import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCelusComponent } from './lista-celus.component';

describe('ListaCelusComponent', () => {
  let component: ListaCelusComponent;
  let fixture: ComponentFixture<ListaCelusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCelusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCelusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
