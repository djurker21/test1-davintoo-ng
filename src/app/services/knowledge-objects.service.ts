import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { KnowledgeObject } from '../models/knowledge-object';

const apiUrl = 'https://qa.davintoo.com/api/rest.php/knowledge-objects';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeObjectsService {

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<KnowledgeObject[]>(apiUrl + '?page=1&count=100&filter[type]=knowledge_base&action=search');
  }
}
