import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FlipContainerBackDirective, FlipContainerFrontDirective } from './flip-container.directives';

@Component({
  selector: 'ps-flip-container',
  templateUrl: './flip-container.component.html',
  styleUrls: ['./flip-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flipState', [
      state(
        'back',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'front',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('back => front', animate('300ms ease-out')),
      transition('front => back', animate('300ms ease-in')),
    ]),
  ],
})
export class PsFlipContainerComponent implements AfterViewInit {
  @Input() public removeHiddenNodes = true;

  public get active(): 'back' | 'front' {
    return this._active;
  }

  @ContentChild(FlipContainerFrontDirective, { read: TemplateRef })
  public _frontTemplate: TemplateRef<any> | null = null;

  @ContentChild(FlipContainerBackDirective, { read: TemplateRef })
  public _backTemplate: TemplateRef<any> | null = null;

  @ViewChild('frontside', { static: true }) public _frontside: ElementRef<any>;
  @ViewChild('backside', { static: true }) public _backside: ElementRef<any>;

  public _active: 'back' | 'front' = 'front';
  public _attachFront = true;
  public _attachBack = false;

  constructor(private cd: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    this._backside.nativeElement.hidden = true;
  }

  public showFront() {
    this.show('front');
  }

  public showBack() {
    this.show('back');
  }

  public show(show: 'back' | 'front') {
    if (this._active !== show) {
      this._active = show;
      this.cd.markForCheck();
    }
  }

  public toggleFlip() {
    this.show(this._active === 'front' ? 'back' : 'front');
  }

  public _flipStart() {
    if (this._active === 'back') {
      this._backside.nativeElement.hidden = false;
      this._attachBack = true;
    } else {
      this._frontside.nativeElement.hidden = false;
      this._attachFront = true;
    }
    this.cd.markForCheck();
  }

  public _flipDone() {
    if (this._active === 'back') {
      this._frontside.nativeElement.hidden = true;
      this._attachFront = false;
    } else {
      this._backside.nativeElement.hidden = true;
      this._attachBack = false;
    }
    this.cd.markForCheck();
  }
}