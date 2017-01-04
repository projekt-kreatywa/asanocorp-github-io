/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsanoCorpComponent } from './asano-corp.component';

describe('AsanoCorpComponent', () => {
  let component: AsanoCorpComponent;
  let fixture: ComponentFixture<AsanoCorpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsanoCorpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsanoCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
