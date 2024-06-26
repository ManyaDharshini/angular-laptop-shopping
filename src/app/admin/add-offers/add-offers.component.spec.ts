/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddOffersComponent } from './add-offers.component';

describe('AddOffersComponent', () => {
  let component: AddOffersComponent;
  let fixture: ComponentFixture<AddOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
