import { StatesT7 } from './../enums/StatesT7';
import { AlphabetT7 } from './../enums/AlphabetT7';
import { FSM } from "k4ycer-lexer";

export class FSMT7 extends FSM{
    constructor(){
        let alphabet: string[] = Object.keys(AlphabetT7).map(k => AlphabetT7[k as any]);
        let states: number[] = FSM.EnumToArray(StatesT7);
        let initialState: number = StatesT7.Initial;
        let acceptingStates: number[] = [StatesT7.u, StatesT7.v, StatesT7.w, StatesT7.x, StatesT7.y, StatesT7.z];        

        super(alphabet, states, initialState, acceptingStates);
    }

    buildTransitionTable(){
        // u
        this.addTransition(StatesT7.Initial, StatesT7.u, AlphabetT7.u);

        // v
        this.addTransition(StatesT7.Initial, StatesT7.v, AlphabetT7.v);

        // w
        this.addTransition(StatesT7.Initial, StatesT7.w, AlphabetT7.w);

        // x
        this.addTransition(StatesT7.Initial, StatesT7.x, AlphabetT7.x);

        // y
        this.addTransition(StatesT7.Initial, StatesT7.y, AlphabetT7.y);

        // z
        this.addTransition(StatesT7.Initial, StatesT7.z, AlphabetT7.z);        
    }
}