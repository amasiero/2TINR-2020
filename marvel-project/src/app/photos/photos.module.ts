import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotosModule {}