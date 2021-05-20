import { Component } from '@angular/core';
import { GridBaseService} from './grid-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid-base-example';

  constructor(private gridBaseService: GridBaseService) {
    this.getData()
  }


  getData() {
   this.gridBaseService.getData().subscribe((data) => {
     console.log(data)
   })
 }
}
