import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = 'Marvel Project';
  photos: Photo[] = []

  constructor(private photoService: PhotoService) { }
  
  ngOnInit() {
    this.photoService
      .listCharacters('Spider-man')
      .subscribe((elemento: any) => 
        this.photos = elemento.data.results.map((personagem: any) => 
          ({
            'id': personagem.id,
            'url': `${personagem.thumbnail.path}.${personagem.thumbnail.extension}`,
            'description' : personagem.description,
            'name': personagem.name
          })
        ));
  }

}
