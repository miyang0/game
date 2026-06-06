import { Actor, Engine, Vector, Scene, DisplayMode, randomIntInRange, Keys } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Player } from '../player.js';



export class LevelOne extends Scene {
    onInitialize(engine) {

        player

        console.log("I am a level")
        const bg = new Actor()
        bg.graphics.use(Resources.Background.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        ///bg.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(bg)

       /// this.addPlatforms()

        this.player = new Player()
        this.add(this.player)
        //this.camera.strategy.lockToActor(this.mario)
        this.camera.strategy.elasticToActor(this.player, 0.2, 0.6)

        }
    }
