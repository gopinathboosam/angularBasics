import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofTodosComponent } from './listof-todos.component';

describe('ListofTodosComponent', () => {
  let component: ListofTodosComponent;
  let fixture: ComponentFixture<ListofTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
