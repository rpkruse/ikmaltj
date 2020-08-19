import { Component, OnInit } from '@angular/core';
import { NarutoService } from 'src/services/naruto.service';
import { Observable } from 'rxjs';
import { NarutoModel, NarutoModelList } from 'src/models/naruto.model';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IKMLTJ';

  narutoModels: NarutoModel[] = [];
  userInput: string = '';

  normalMode: boolean = true;
  memeMode: boolean = false;

  constructor(private narutoService: NarutoService, public toasterService: ToasterService) { }

  ngOnInit(): void {
    this.narutoService.getCharacters().subscribe(
      d => this.narutoModels = d.characters
    );
  }

  addCharacterName(narModel: NarutoModel): void {
    let stringToAdd = '';
    this.userInput = this.userInput.trim();

    if (this.normalMode) {
      stringToAdd += ` ${narModel.name} `;
    }

    if (this.memeMode) {
      if (stringToAdd.length === 0) {
        stringToAdd += ` ${narModel.memeName} `;
      } else {
        stringToAdd += `(${narModel.memeName}) `;
      }
    }

    this.userInput += stringToAdd;
    // this.userInput = this.userInput.trimLeft();
  }

  getCharacterImg(img: string): string {
    return `./assets/images/naruto/${img}`;
  }

  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.showSuccess();
  }

  showSuccess() {
    console.log('hit');
    this.toasterService.show('Successfully Copied!', { classname: 'bg-success text-light' });
  }
}
