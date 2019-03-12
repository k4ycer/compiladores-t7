import { TokenTypesT7 } from './../enums/TokenTypesT7';
import { SyntacticAnalyzer, Token } from 'k4ycer-syntactic-analyzer';

export class SyntacticAnalyzerT7 extends SyntacticAnalyzer{
    constructor(tokens: Token[]){        
        super(tokens);

        this.setInitialRule(this.S);
    }

    private S(){
        switch(this.currentToken.type){
            case TokenTypesT7.uToken:
                this.consume(TokenTypesT7.uToken);
                this.B();
                this.D();
                this.consume(TokenTypesT7.zToken);
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private B(){
        switch(this.currentToken.type){
            case TokenTypesT7.wToken:
                this.consume(TokenTypesT7.wToken);
                this.Bp();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Bp(){
        switch(this.currentToken.type){
            case TokenTypesT7.vToken:
                this.consume(TokenTypesT7.vToken);
                this.Bp();
                break;                
            case TokenTypesT7.yToken:
            case TokenTypesT7.xToken:
            case TokenTypesT7.zToken:
            case TokenTypesT7.pesoToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private D(){
        switch(this.currentToken.type){
            case TokenTypesT7.yToken:
            case TokenTypesT7.xToken:
                this.E();
                this.F();
                break;                
            case TokenTypesT7.zToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private E(){
        switch(this.currentToken.type){
            case TokenTypesT7.yToken:
                this.consume(TokenTypesT7.yToken);
                break;      
            case TokenTypesT7.zToken:
            case TokenTypesT7.xToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private F(){
        switch(this.currentToken.type){
            case TokenTypesT7.xToken:                
                this.consume(TokenTypesT7.xToken);
                break;                
            case TokenTypesT7.zToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }
}