import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PsFlipContainerComponent } from './flip-container.component';
import { PsFlipContainerModule } from './flip-container.module';

@Component({
  selector: 'ps-test-component',
  template: `
    <ps-flip-container [removeHiddenNodes]="removeHiddenNodes">
      <div *psFlipContainerFront><span>front</span></div>
      <div *psFlipContainerBack><span>back</span></div>
    </ps-flip-container>
  `,
})
export class TestComponent {
  public removeHiddenNodes = true;

  @ViewChild(PsFlipContainerComponent, { static: true }) cmp: PsFlipContainerComponent;
}

describe('PsFlipContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CommonModule, PsFlipContainerModule],
      declarations: [TestComponent],
    }).compileComponents();
  }));

  it('should initially show front and switch to back after toggle', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const flipBoxDbg = fixture.debugElement.query(By.css('.ps-flip-container__flip-box'));
    expect(flipBoxDbg.nativeElement.style.transform).toEqual('rotateY(0deg)');

    component.cmp.toggleFlip();
    fixture.detectChanges();

    tick(300);
    fixture.detectChanges();

    expect(flipBoxDbg.nativeElement.style.transform).toEqual('rotateY(180deg)');
  }));

  it('should hide DOM nodes with removeHiddenNodes false', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    component.removeHiddenNodes = false;
    fixture.detectChanges();

    const backEl = fixture.debugElement.query(By.css('.ps-flip-container__side__back')).nativeElement;
    const frontEl = fixture.debugElement.query(By.css('.ps-flip-container__side__front')).nativeElement;

    expect(backEl.hidden).toEqual(true);
    expect(backEl.children.length).toEqual(1);
    expect(frontEl.hidden).toEqual(false);
    expect(frontEl.children.length).toEqual(1);

    component.cmp.toggleFlip();
    fixture.detectChanges();

    tick(300);
    fixture.detectChanges();

    expect(backEl.hidden).toEqual(false);
    expect(backEl.children.length).toEqual(1);
    expect(frontEl.hidden).toEqual(true);
    expect(frontEl.children.length).toEqual(1);
  }));

  it('should hide and remove DOM nodes with removeHiddenNodes true', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    component.removeHiddenNodes = true;
    fixture.detectChanges();

    const backEl = fixture.debugElement.query(By.css('.ps-flip-container__side__back')).nativeElement;
    const frontEl = fixture.debugElement.query(By.css('.ps-flip-container__side__front')).nativeElement;

    expect(backEl.hidden).toEqual(true);
    expect(backEl.children.length).toEqual(0);
    expect(frontEl.hidden).toEqual(false);
    expect(frontEl.children.length).toEqual(1);

    component.cmp.toggleFlip();
    fixture.detectChanges();

    tick(300);
    fixture.detectChanges();

    expect(backEl.hidden).toEqual(false);
    expect(backEl.children.length).toEqual(1);
    expect(frontEl.hidden).toEqual(true);
    expect(frontEl.children.length).toEqual(0);
  }));
});