
$('#profileForm').submit(function(e) {  //When form1 is submitted, run function e 
	e.preventDefault();			  //Keeps page from refreshing when form is resubmitted
      console.log('form submitted!');    


      //set variables for values of each element
      var profileName = document.getElementById('profilename').value;
      var original = document.getElementById('name');
      $(original).replaceWith(profileName);
      var profileName = ' ';


      var profileUrl = document.getElementById('profileurl').value;
      var newimg = document.createElement('img');
      newimg.src = profileUrl;
      var originalimg = document.getElementById('originalimg');
      $(originalimg).replaceWith(profileUrl);
      var profileUrl = ' ';


      var profileBio = document.getElementById('profilebio').value;
      var newbio = document.getElementById('bio');
      $(newbio).replaceWith(profileBio)
    });