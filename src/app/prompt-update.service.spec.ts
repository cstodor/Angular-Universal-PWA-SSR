import { TestBed, inject } from '@angular/core/testing';

import { PromptUpdateService } from './prompt-update.service';

describe('PromptUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromptUpdateService]
    });
  });

  it('should be created', inject([PromptUpdateService], (service: PromptUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
