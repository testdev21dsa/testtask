import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IImageInfo } from './IImageInfo';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private httpClient: HttpClient) {
  }

  getImageList(page: number, limit = 40): Observable<IImageInfo[]> {
    return this.httpClient.get<IImageInfo[]>(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  }
}
