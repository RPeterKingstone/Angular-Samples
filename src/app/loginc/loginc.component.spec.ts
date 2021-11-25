import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RestapiService } from '../restapi.service';
import { interval } from 'rxjs';
import * as Rx from 'rxjs';
import { take, finalize, delay} from 'rxjs/operators';

import { LogincComponent } from './loginc.component';
import { Activities } from '../activities.model';

describe('LogincComponent', () => {
  let component: LogincComponent;
  let fixture: ComponentFixture<LogincComponent>;
  const activities: Activities = {"activityid" : "", name: "", averagetime : "", stepsneeded: "" };

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      declarations: [ LogincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(RestapiService);
    let spy_getPosts = spyOn(service,"login").and.callFake(() => {
      return Rx.of(activities).pipe(delay(100));//interval(1000).pipe(take([]);/
    });
    component.performLogin();
    tick(100);
    expect(component.performLogin).toEqual([]);
  }));

});
