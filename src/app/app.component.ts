import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-clinica';
}

// @Injectable()
// export class BasketWrapperService {
//   private addItemToBasketSource = new Subject<string>();
//   addItemToBasket$ = this.addItemToBasketSource.asObservable();

//   addItemToBasket(item: any) {
//     this.addItemToBasketSource.next(item);
//   }
// }