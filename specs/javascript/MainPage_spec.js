describe('Main page', function(){
  it('contain header', function(){
    expect($('.mui-app-bar-title').text())
    .toMatch('Voloshin Sergey - Frontend DeveloperVoloshin');
  });

  it('contain greeting', function(){
    expect($('.vs-page h1').text())
    .toMatch('Nice to see you!');
  });

  it('contain links to pages', function(){
    var menuText = $('.vs-page-ul.mui-font-style-headline').text();
    
    expect(menuText).toMatch('My works');
    expect(menuText).toMatch('My skills');
    expect(menuText).toMatch('My interests');
    expect(menuText).toMatch('My social activity');
  });

  it('contain reconstruction message', function(){
    expect($('.vs-reconsraction').text())
    .toMatch('SITE UNDER RECONSTRACTION!');
  });
});
