import { Component, OnInit } from '@angular/core';

import { KnowledgeObjectsService } from '../services/knowledge-objects.service';

import { KnowledgeObject } from '../models/knowledge-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<KnowledgeObject>;
  p: number = 1;

  constructor(private knowledgeObjectsService: KnowledgeObjectsService) { }

  ngOnInit() {
    this.knowledgeObjectsService.getItems(1).subscribe((data) => {
      this.items = data.data;
    });
  }

}
