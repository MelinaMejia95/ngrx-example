import { Component } from '@angular/core';
import { AppState } from './reducers'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>

  constructor(private store: Store<AppState>) {
    this.counter = store.select<number>((state: AppState) => {
      return state.counter
    })
  }
}
