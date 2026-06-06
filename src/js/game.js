import '../css/style.css'
import { Actor, Engine, Vector, Scene, SolverStrategy, FadeInOut, Color, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { LevelOne } from "./scenes/level1.js"
import { Player } from './player.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 600,
            displayMode: DisplayMode.FitScreen, 
            suppressHiDPIScaling: true,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 800),
                }
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){      
        this.add('level', new LevelOne())
        //this.add('game-over', new GameOver())
        this.goToScene('level')
    }

}

new Game()