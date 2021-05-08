class Paper{
	constructor(x,y,r)
	{
	// assign options to the paper ball
		var options={
	  'density':7.5,
      'isStatic' : false,
      'friction': 0.8,
      'restitution':0
		}
	    this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{  
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image, 0, 0, this.r, this.r);
			pop()
	}

}