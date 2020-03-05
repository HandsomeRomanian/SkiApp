import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvalsPage } from './evals.page';

describe('ManagementPage', () => {
  let component: EvalsPage;
  let fixture: ComponentFixture<EvalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
