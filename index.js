$('#form1').submit(function(e) {  //When form1 is submitted, run function e 
	e.preventDefault();			  //Keeps page from refreshing when form is resubmitted
      console.log('form submitted!');
      //set and test vars for form inputs
      var imageUrl = document.getElementById('imageurl').value;
      var imageCaption = document.getElementById('imagecaption').value;

      //reset value
      document.getElementById('imageurl').value = '';
      document.getElementById('imagecaption').value = '';

      addNewPost(imageUrl, imageCaption);



    });


	
	function addNewPost(image, caption) {
		//Create post box
		var postBox = document.createElement('div');
		postBox.classList.add('post_box');
		//image element
		var img_url_elem = document.createElement('img');
		img_url_elem.src = image;
		//caption element
		var cap_elem = document.createElement('p');
		cap_elem.innerHTML = caption;

		//closeButton
		var closeButton = document.createElement('img');
		closeButton.src = 'http://cdn.onlinewebfonts.com/svg/img_161345.png'; 
		closeButton.classList.add('close_button');

		//append parts
		postBox.appendChild(img_url_elem);
		postBox.appendChild(cap_elem);


		//close button event listener
		closeButton.addEventListener("click", function() {
			var postBox_id = String(Math.random());
			postBox.id = postBox_id;
			document.getElementById(postBox_id).remove(postBox_id);
			
		});


		//append close button
		postBox.appendChild(closeButton);

		//append post box to container
		var container = document.getElementById('container');
		container.appendChild(postBox);

		
	}

