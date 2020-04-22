// it('creates a screenshot of the skills page', function() {
//   return this.browser
//     .url('/unifiedlogin/login/index.html?source=classic')
    
//     .assertView('Whole page', '#ember342',
//     {
     
//       allowViewportOverflow: true,
//       captureElementFromTop: true,
//       compositeImage: true,
//       screenshotDelay: 10
//   }
//     );
// });
it('creates a screenshot of the skills page', function() {
  return this.browser
  .url('https://s2bssotest.standardchartered.com/unifiedlogin/v2.0/login/index.html?language=en')
  

  
  .element('#userid_email-name').setValue('NTBUABC!@#$SER01')
  .element('#group_id-name').setValue('ABC!@#$')
  .element('#-name').click()
  // .element('#unified_password-name').setValue('')
  // .element('#login-btn').click()
       
  .assertView('Whole page', '#ember334',
    {     
      allowViewportOverflow: true,
      tolerance: 5,
      captureElementFromTop: true,
      compositeImage: true,
      screenshotDelay: 10
  }
    );
});


// describe('feature', function() {
//   hermione.skip.in('chromeXL', "It shouldn't work in Chrome");
//   it('test1', function() {
//       return 'test1';
//   });

// it('test2', function() {
//   return 'test2';
// });

//   hermione.skip.in(['chromeXL', 'firefoxXL', /ie\d*/], 'Unstable test, see ticket TEST-123');
//   it('test3', function() {
//       return 'test3';
//   });
// });
