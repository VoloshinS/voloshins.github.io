describe('something', function(){
  beforeEach(function(){
    var container = document.createElement("div");
    container.id = 'app';
    document.getElementsByTagName('body')[0].appendChild(container);
  })

  it('contain app container', function(){
    expect(document.getElementById('app')).toBeTruthy()
  });
});