import { TextToTokenT7 } from './../enums/TextToTokenT7';
import { TokenTypesT7 } from './../enums/TokenTypesT7';
import { Lexer, Token } from 'k4ycer-lexer';
import { FSMT7 } from './FSMT7';

export class LexerT7 extends Lexer{    
    constructor(input: string){                
        super(input, new FSMT7(), TokenTypesT7.endOfFileToken, []);
    }
    
    recognizeToken(accepted: boolean, analyzedString: string, acceptingState: number): Token{
        let tokenType = TextToTokenT7[analyzedString]; 
        let token;        

        token = new Token(tokenType, TokenTypesT7[tokenType], analyzedString, this.line, this.column);

        return token;
    }

    increasePointers(token: Token){
        this.column += token.value.length;
        this.position += token.value.length;
    }
}