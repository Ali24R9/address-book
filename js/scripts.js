var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};


$(document).ready(function() {
  $('form#new-contact').submit(function(event){
    event.preventDefault();

    var inputtedFirst = $('#new-first-name').val();
    var inputtedLast = $('#new-last-name').val();
    var inputtedAddress = $('#new-address').val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirst;
    newContact.lastName = inputtedLast;
    newContact.address = inputtedAddress;

    $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + "</span></li>");

    $('.contact').last().click(function() {
      $('h2#contactInfo').text(newContact.fullName());
      $('#show-contact').show();
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('.address').text(newContact.address);
    });
    this.reset();
  });
});
