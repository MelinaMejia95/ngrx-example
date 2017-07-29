import { Component } from '@angular/core';
import { AppState } from './reducers'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { INCREMENT, DECREMENT, RESET, DECREMENT10, INCREMENT10 } from './counter.reducer'

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

  increment() {
    this.store.dispatch({ type: INCREMENT })
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT })
  }

  reset() {
    this.store.dispatch({ type: RESET })
  }

  decrement10() {
    this.store.dispatch({ type: DECREMENT10 })
  }

  increment10() {
    this.store.dispatch({ type: INCREMENT10 })
  }
}


