describe('Projects page', function(){
  beforeEach(function(done){
    $('div.mui-menu-item:first-child').click();
    setTimeout(function(){
      done();
    }, 100);
  });

  it('contain header', function(done){
    expect($('.vs-page h1').text())
    .toMatch('Some of my previous projects and works:');
    done();
  });

  it('contain links to pages', function(done){
    var projectHeaders = $('.vs-page h4').text();
    
    expect(projectHeaders).toMatch('NowShop');
    expect(projectHeaders).toMatch('Countryliving shop');
    expect(projectHeaders).toMatch('WOT clan site');
    expect(projectHeaders).toMatch('Tango store');
    done()
  });
});
