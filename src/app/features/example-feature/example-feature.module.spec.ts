import { ExampleFeatureModule } from './example-feature.module';

describe('ExampleFeatureModule', () => {
  let exampleFeatureModule: ExampleFeatureModule;

  beforeEach(() => {
    exampleFeatureModule = new ExampleFeatureModule();
  });

  it('should create an instance', () => {
    expect(exampleFeatureModule).toBeTruthy();
  });
});
