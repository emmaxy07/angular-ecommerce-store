import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  chatHistory: { message: string, sender: string }[] = [];
  inputMessage: string = '';
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getItems().subscribe(products => {
      console.log(products);
      this.products = products;
    })
  }

  sendMessage() {
    this.chatHistory.push({ message: this.inputMessage, sender: 'user' });
    let response: string;

    if (this.inputMessage.includes('price')) {
      let productName = this.inputMessage.split(' ')[0];
      let product = this.products.find(p => p.title === productName);
      if (product) {
        response = `${product.title} costs ${product.price}`;
      } else {
        response = `Sorry, I don't know that product`;
      }
    } else if (this.inputMessage.includes('description')) {
        let productName = this.inputMessage.split(' ')[0];
        let product = this.products.find(p => p.title === productName);
        if (product) {
          response = `${product.title}: ${product.description}`;
        } else {
          response = `Sorry, I don't know that product`;
        }
    } else {
      response = `I'm sorry, I didn't understand your question.`;
    }
    
    this.chatHistory.push({ message: response, sender: 'bot' });

    this.inputMessage = '';
    }
  }

