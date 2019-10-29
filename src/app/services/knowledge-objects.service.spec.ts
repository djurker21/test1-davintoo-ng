import { TestBed } from '@angular/core/testing';

import { KnowledgeObjectsService } from './knowledge-objects.service';

describe('KnowledgeObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnowledgeObjectsService = TestBed.get(KnowledgeObjectsService);
    expect(service).toBeTruthy();
  });
});
