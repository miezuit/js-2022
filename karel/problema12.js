this.turnRight = function() {
	this.turnLeft()
	this.turnLeft()
	this.turnLeft()
}
this.makeSteps = function(steps) {
    for(let i=0; i<steps; i++) {
        this.move()
    }
}
this.makeColumn = function() {
	do {
	   if(!this.beepersPresent()) {
	      this.putBeeper()
	   }
	   if (this.frontIsClear()) {
	      this.move()
	   }
	} while(this.frontIsClear())
	if(!this.beepersPresent()) {
	    this.putBeeper()
	}
}
this.goToNextColumn = function() {
	let initialFacingNorth = this.facingNorth()
    if (this.facingNorth()) {
       this.turnRight()
    } else {
       this.turnLeft()
    }
    this.makeSteps(4)
    if (initialFacingNorth) {
        this.turnRight()
    } else {
        this.turnLeft()
    }
}

this.turnLeft()

for (let i=0; i<4; i++) {
    this.makeColumn()
    this.goToNextColumn()
}
