/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Menu_AgendadorComponent } from './menu_Agendador.component';

describe('Menu_AgendadorComponent', () => {
  let component: Menu_AgendadorComponent;
  let fixture: ComponentFixture<Menu_AgendadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu_AgendadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu_AgendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
