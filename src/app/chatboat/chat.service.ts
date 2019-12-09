import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable()
export class ChatService {
  constructor() {}
  
  conversation = new Subject<Message[]>();
  
  messageMap = {
    "hi": "Hello",
    "who are you": "My name is Agular Bot",
    "what is angular": "Angular is the best framework ever",
    "very bad ui":"your message will be not considerd hahahaha",
    "default": "I can't understand. Can you please repeat"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'] || this.messageMap['hi'] ||this.messageMap['very bad ui'] || this.messageMap['who are you'] || this.messageMap['what is angular'];
  }
}