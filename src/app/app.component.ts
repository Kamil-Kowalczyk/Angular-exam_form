import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam_angular_form';

  kursy: String[] = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"]
}
