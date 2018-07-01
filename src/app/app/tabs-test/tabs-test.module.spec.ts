import { TabsTestModule } from './tabs-test.module';

describe('TabsTestModule', () => {
  let tabsTestModule: TabsTestModule;

  beforeEach(() => {
    tabsTestModule = new TabsTestModule();
  });

  it('should create an instance', () => {
    expect(tabsTestModule).toBeTruthy();
  });
});
