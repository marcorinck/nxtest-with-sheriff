import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnotherLibComponent } from './annother-lib.component';

describe('AnnotherLibComponent', () => {
  let component: AnnotherLibComponent;
  let fixture: ComponentFixture<AnnotherLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnotherLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnotherLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
