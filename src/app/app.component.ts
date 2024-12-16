import {
  AfterViewInit,
  Component,
  Input,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { IonAccordion, IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  public value: string[];

  @ViewChild(IonAccordionGroup, { read: IonAccordionGroup })
  public accordionGroup: IonAccordionGroup;
  @ViewChildren(IonAccordion, { read: IonAccordion })
  public accordions: QueryList<IonAccordion>;

  public ngAfterViewInit(): void {
    // @ts-ignore
    const all = [...this.accordions].map((accordion) => accordion.value);
    console.log(all);
    // @ts-ignore
    this.accordionGroup.value = all;
  }
}
