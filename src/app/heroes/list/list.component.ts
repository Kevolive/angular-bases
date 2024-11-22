import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosName: String[]=['Spiderman', 'Ironman', 'Hulk', 'She Hulk']
  public deleteHero?: String;

  removeheroe(): void {
    this.deleteHero= this.herosName.pop();
    

  }



}
