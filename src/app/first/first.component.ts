import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
 @Input() v='kala';
 @Input() x:any;
 mynum:number=0
}
