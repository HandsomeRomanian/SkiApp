import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelListComponent } from './level-list.component';

describe('LevelListComponent', () => {
  let component: LevelListComponent;
  let fixture: ComponentFixture<LevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
