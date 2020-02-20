componentDidMount() {
    // var camera, stars=[] , starsback = [] , star;
    this.stars = [];
    this.starsback = [];
    
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
		this.camera.position.z = 5;	 

		//scene
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color( 0x333333 );
		//renderer
		//set the size of the renderer
		this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
        
		//add the renderer to the html document body
    // document.body.appendChild( renderer.domElement );
    this.mount.appendChild( this.renderer.domElement );
    
    for ( var z=0; z < 40; z++ ) {
		
      // 	// Make a sphere (exactly the same as before). 
        var geometry   = new THREE.SphereGeometry(0.5, 20, 20)
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        this.sphere = new THREE.Mesh(geometry, material)
  
      // 	// This time we give the sphere random x and y positions between -500 and 500
        this.sphere.position.x = Math.random() * 2000 - 1000;
        this.sphere.position.y = Math.random() * 2000 - 1000;
        this.sphere.position.z = Math.random() * 1000 - 1000;
        console.log(this.sphere);
      // 	// Then set the z position to where it is in the loop (distance of camera)
                  // sphere.position.z = z;
                  // sphere.material.transparent = true;
                  // sphere.material.opacity = 0.5;
  
      // 	// scale it up a bit
        this.sphere.scale.x = this.sphere.scale.y = 1.5;
  
      // 	//add the this.sphere to the scene
        this.scene.add( this.sphere );
  
      // 	//finally push it to the stars array 
        this.stars.push(this.sphere); 
              }
        for ( var z= 0; z <40; z++ ) {
  
        // Make a sphere (exactly the same as before). 
        // var geometry   = new THREE.SphereGeometry(0.5, 20, 20)
        // var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        // var sphere = new THREE.Mesh(geometry, material)
  
        // This time we give the sphere random x and y positions between -500 and 500
        this.sphere.position.x = Math.random() * 2000 - 1000;
        this.sphere.position.y = Math.random() * 2000 - 1000;
        this.sphere.position.z = Math.random() * 1000 - 1000;
        // var light = new THREE.PointLight( 0xffffff	, 1000, 100 );
        // light.position.set( 50, 50, 50 );
        // scene.add( light );
        // Then set the z position to where it is in the loop (distance of camera)
        // this.sphere.position.z = z;
  
        // scale it up a bit
        this.sphere.scale.x = this.sphere.scale.y = 1.5;
  
        //add the this.sphere to the scene
        this.scene.add( this.sphere );
  
        //finally push it to the stars array 
        this.starsback.push(this.sphere); 
      }


      // requestAnimationFrame( this.render );

      window.addEventListener("resize",function() {
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        
    })
      //render the scene
      this.start();
      // this.renderer.render( this.scene, this.camera );
        // this.animateStars();
  }

  
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animateStars)
    }
  }
  animateStars = () => { 
				
    // loop through each star
    for(var i=0; i<this.stars.length; i++) {
      
      this.star = this.stars[i]; 
        
    // 	// and move it forward dependent on the mouseY position. 
      this.star.position.z +=  i/10;
        
    // 	// if the particle is too close move it to the back
      if(this.star.position.z>-1000) 
        this.star.position.z -= 1000; 
      
        }
        for(var i=0; i<this.starsback.length; i++) {
      
      this.star = this.starsback[i]; 
        
      // and move it forward dependent on the mouseY position. 
      this.star.position.z -=  i/10;
        
      // if the particle is too close move it to the back
      if(this.star.position.z<-2000) this.star.position.z += 1000; 
      
      this.renderScene();
      this.frameId = requestAnimationFrame(this.animateStars);
    }
  
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
}
