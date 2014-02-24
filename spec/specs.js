describe('Contact', function() {
  describe('fullName', function() {
    it('should put a first and last name together', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Pardon";
      testContact.fullName().should.equal('Dolly Pardon');
    });
  });  
});



// describe('function name', function() {
//   it('what you want the function to do', function() {
//     caps("input").should.equal("output");
//   });
// });
