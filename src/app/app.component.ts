import { TokenTypesT7 } from './model/enums/TokenTypesT7';
import { LexerT7 } from './model/classes/LexerT7';
import { Component } from '@angular/core';
import { SyntacticAnalyzerT7 } from './model/classes/SyntacticAnalyzerT7';
import { Token } from 'k4ycer-lexer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'T7';
	lexer: LexerT7;
	syntacticAnalyzer: SyntacticAnalyzerT7;

	ngOnInit(){
		this.lexer = new LexerT7("");
		this.syntacticAnalyzer = new SyntacticAnalyzerT7([]);

		this.compile("u");
		console.log("------------");
		this.compile("z");
		console.log("------------");
		this.compile("uz");
		console.log("------------");
		this.compile("uwz");
		console.log("------------");
		this.compile("uwxz");
		console.log("------------");
		this.compile("uwyz");
		console.log("------------");
		this.compile("uwyxz");
		console.log("------------");
		this.compile("uwxyz");
		console.log("------------");
	}

	compile(input: string){
		let tokens: Token[];

		this.lexer.setInput(input);
		tokens = this.lexer.tokenize();		

		// Add $ token at the end        
		tokens.push(new Token(TokenTypesT7.pesoToken, TokenTypesT7[TokenTypesT7.pesoToken], "$", null, null));
		
		console.log("Input: ", input);
		console.log("Tokens: ", tokens);

		this.syntacticAnalyzer.setTokens(tokens);

		try{
			this.syntacticAnalyzer.analyze();
			console.log("Sintacticamente valido");
		}catch(e){
			console.log("Error en analizador sintáctico: " + e.message );
		}	
	}
}
