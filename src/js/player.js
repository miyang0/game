import { Actor, Engine, Vector, DisplayMode, randomIntInRange, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Player extends Actor {

    name
    up 
    down 
    left 
    right 


    constructor(x, y, up, down, left, right){
        super({
          x, y,
            width: 200, height: 100
        })

        this.up = up
        this.down = down
        this.right = right
        this.left = left
    }

    

    onInitialize(engine){
        const shark = new Actor()

        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(Math.random() * 200, Math.random() * 720)
        this.swimspeed = 200;

        this.score = 0
        this.health = 100
        //this.on(...)

    }

    //onCollisionStart(event, other) {
    //    console.log("I collide:")
    //    console.log(this)  // of event.owner
    //    console.log("I collide with:")
    //    console.log(other.owner)
    //    other.owner.kill();
    //    this.score + 1;
    //}

    

    onPostUpdate(engine) {

      ///console.log(`i am ${this.name}`)


        let xspeed = 0;
        let yspeed = 0;
        if (this.name === "billy") {
          if (engine.input.keyboard.isHeld(Keys.Up) || engine.input.keyboard.isHeld(Keys.W)) {
            yspeed -= this.swimspeed;
          }
      
          if (engine.input.keyboard.isHeld(Keys.Down) || engine.input.keyboard.isHeld(Keys.S)) {
            yspeed += this.swimspeed;
          }
      
          if (engine.input.keyboard.isHeld(Keys.Right) || engine.input.keyboard.isHeld(Keys.D)) {
            xspeed += this.swimspeed;
          }
      
          if (engine.input.keyboard.isHeld(Keys.Left) || engine.input.keyboard.isHeld(Keys.A)) {
            xspeed -= this.swimspeed;
          }

          this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x < 0)
        }

    
       // if (engine.input.keyboard.wasPressed(Keys.Space)) {
       //   this.shoot()
       //     console.log("shoot!")
      //  }
      }

      //shoot(){
      //  let b = new Bubble(this.pos.x, this.pos.y)
      //  this.scene.add(b)
      //}
}