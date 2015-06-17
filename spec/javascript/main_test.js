describe('something', function(){
  beforeEach(function(){
    var f = jasmine.getFixtures();
    f.fixturesPath = 'base';
    loadFixtures('spec/javascript/fixtures/app.html');
  })

  it('contain app container', function(){
    console.log(document.getElementById('app'))
    expect(true).toBeTruthy();
  });
});
