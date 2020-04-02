import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const URI = 'https://gateway.marvel.com:443/v1/public/characters';
const API_KEY = '90c150413c4fc2b717c9ac0c396213e3';
const HASH = '63b20604e6337aabc41462538475424f';
const TS = '1585787126';

@Injectable({ providedIn: 'root'})
export class PhotoService {
    
    constructor(private http: HttpClient) {}

    listCharacters(nameCharacter: string) {
        return this.http
         .get<Photo[]>( URI + '?limit=10&apikey=' + API_KEY + '&hash=' + HASH + '&ts=' + TS);
        
    }
}