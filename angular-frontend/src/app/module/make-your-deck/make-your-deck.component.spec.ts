import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeYourDeckComponent } from './make-your-deck.component';

describe('MakeYourDeckComponent', () => {
  let component: MakeYourDeckComponent;
  let fixture: ComponentFixture<MakeYourDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeYourDeckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeYourDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
