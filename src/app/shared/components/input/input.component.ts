import { Component, Input, input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false
})
export class InputComponent  implements OnInit {

  @Input() label: string = '';
  @Input() type: 'email' | 'password' | 'text' = 'text' 
  @Input() clear: boolean = false;
  @Input() placeholder: string = '';
  @Input() control : FormControl = new FormControl();

  constructor() { }

  ngOnInit() {}

  public doWrite(event: any){
    this.control.setValue(event.target.value);
  }

}
