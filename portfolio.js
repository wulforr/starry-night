    //Declare three.js variables
	var camera, scene, renderer, stars=[] , starsback = [];
	 
	//assign three.js objects to each variable
	function init(){
		 
		//camera
		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
		camera.position.z = 5;	 

		//scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x333333 );
		//renderer
		//set the size of the renderer
		renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        
		//add the renderer to the html document body
		document.body.appendChild( renderer.domElement );
	}


	function addSphere(){

				// The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
				for ( var z=0; z < 40; z++ ) {
		
				// 	// Make a sphere (exactly the same as before). 
					var geometry   = new THREE.SphereGeometry(0.5, 20, 20)
					var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
					var sphere = new THREE.Mesh(geometry, material)
		
				// 	// This time we give the sphere random x and y positions between -500 and 500
					sphere.position.x = Math.random() * 2000 - 1000;
                    sphere.position.y = Math.random() * 2000 - 1000;
                    sphere.position.z = Math.random() * 1000 - 1000;
                    console.log(sphere);
				// 	// Then set the z position to where it is in the loop (distance of camera)
                    // sphere.position.z = z;
                    // sphere.material.transparent = true;
                    // sphere.material.opacity = 0.5;
		
				// 	// scale it up a bit
					sphere.scale.x = sphere.scale.y = 1.5;
		
				// 	//add the sphere to the scene
					scene.add( sphere );
		
				// 	//finally push it to the stars array 
					stars.push(sphere); 
                }
                for ( var z= 0; z <40; z++ ) {
		
					// Make a sphere (exactly the same as before). 
					var geometry   = new THREE.SphereGeometry(0.5, 20, 20)
					var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
					var sphere = new THREE.Mesh(geometry, material)
		
					// This time we give the sphere random x and y positions between -500 and 500
					sphere.position.x = Math.random() * 2000 - 1000;
                    sphere.position.y = Math.random() * 2000 - 1000;
                    sphere.position.z = Math.random() * 1000 - 1000;
					// var light = new THREE.PointLight( 0xffffff	, 1000, 100 );
					// light.position.set( 50, 50, 50 );
					// scene.add( light );
					// Then set the z position to where it is in the loop (distance of camera)
					// sphere.position.z = z;
		
					// scale it up a bit
					sphere.scale.x = sphere.scale.y = 1.5;
		
					//add the sphere to the scene
					scene.add( sphere );
		
					//finally push it to the stars array 
					starsback.push(sphere); 
				}
	}

	function animateStars() { 
				
		// loop through each star
		for(var i=0; i<stars.length; i++) {
			
			star = stars[i]; 
				
		// 	// and move it forward dependent on the mouseY position. 
			star.position.z +=  i/10;
				
		// 	// if the particle is too close move it to the back
			if(star.position.z>-1000) star.position.z -= 1000; 
			
        }
        for(var i=0; i<starsback.length; i++) {
			
			star = starsback[i]; 
				
			// and move it forward dependent on the mouseY position. 
			star.position.z -=  i/10;
				
			// if the particle is too close move it to the back
			if(star.position.z<-2000) star.position.z += 1000; 
			
		}
	
	}

	function render() {
		//get the frame
		requestAnimationFrame( render );

		//render the scene
		renderer.render( scene, camera );
			animateStars();

	}
	
	init();
	addSphere();
    render();
    
    window.addEventListener("resize",function() {
        renderer.setSize( window.innerWidth, window.innerHeight );
        
    })