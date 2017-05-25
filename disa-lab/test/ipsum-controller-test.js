'usestrict' //My linter doesn't care if I use semicolons, anymore, so I'm not. See how trustworthy I am?

require('angular')
require('angular-mocks')

describe('testing IpsumController', function(){
  beforeEach(() => {
    angular.mock.module('ipsumApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.ipsumCtrl = new $controller('IpsumController');
      this.ipsumCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  })

  it('initial state should be correct', () => {
    expect(this.ipsumCtrl.selected).toEqual('hacker or something');
    expect(this.ipsumCtrl.content).toEqual('');
  })

  it('handleSubmit should generate ipsum', () => {
    expect(this.ipsumCtrl.content).toEqual('');
    this.ipsumCtrl.handleSubmit();
    expect(this.ipsumCtrl.content.length).toBeGreaterThan(0);
  })

});
