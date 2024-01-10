import { Character } from './data/character';
import { CharacterData } from './data/character-data';

//#region Example returning void
export function exampleVoid() {
	let logReturn = logValue('log me');
	console.log(`log return: ${logReturn}`);
}

function logValue(value: string): void {
	console.log(value);

	//TODO Try uncommenting this
	// return '';
}
//#endregion



//#region Example returning undefined
export function exampleUndefined() {
	let character = getCharacter(2);

	//TODO Try writting a property of user instead of the user object (ex: user.firstName)
	console.log(`user return ${character?.name}`);

	console.log(`user return ${JSON.stringify(character)}`);
}

function getCharacter(id: number): Character | undefined {
	let data = new CharacterData();
	return data.get(id);
}
//#endregion



//#region Example returning never
export function exampleNever() {
	try {
		let errorReturn = throwError();
		console.log(`never return ${errorReturn}`);
	} catch(error) {
		console.error(error);
	}
}

function throwError(): never {
	//TODO Try commenting out this code
	throw new Error('This is a test error');
}
//#endregion

//#region notes

// In imperative languages, void can be thought of as a type containing a single value. 
// such languagues do nto provide a means to construct or consume this value, but a void function
// can be thought of as returning this trivial value.

// In contrast, never is a type containing no values, which means that a function with this 
// return type can never return normally at all. This means either throwing an exception
// or failing to terminate.

//#endregion