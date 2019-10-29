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
  config: any;

  constructor(private knowledgeObjectsService: KnowledgeObjectsService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1
    };
  }

  ngOnInit() {
    this.knowledgeObjectsService.getItems().subscribe((data) => {
      this.items = data.data;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
