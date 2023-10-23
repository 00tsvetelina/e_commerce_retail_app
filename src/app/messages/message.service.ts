import { Injectable } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private _messages: string[] = [];
  isDisplayed = false;
  

  get messages(): string[] {
    return this._messages;
  }

  set messages(messages:string[]) {
    this._messages = messages
  }
 
  constructor(private cartService: CartService) {  }

  addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
  }


}
