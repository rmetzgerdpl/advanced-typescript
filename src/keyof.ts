import { CharacterStats } from './data/character-stats';

//#region key of
export function exampleKeyof() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	incrementStat(stats, 'strength');

	console.log(stats);
}

function incrementStat(stats: CharacterStats, statType: keyof CharacterStats) {
	stats[statType]++;
}
//#endregion




//#region keyof foreach
export function exampleForEach() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	Object.keys(stats).forEach(key => console.log(key));

	//This won't compile...
	// Object.keys(stats).forEach(key => console.log(stats[key]));

	Object.keys(stats).forEach(key => console.log(stats[<keyof CharacterStats>key]));
}
//#endregion



//#region keyof property
export function exampleProperty() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	logObject(stats, {charisma: true});
}

function logObject<T extends object>(value: T, printKeys: {[K in keyof T]?: boolean}) {
	Object.keys(printKeys)
		.filter(key => printKeys[<keyof T>key])
		.forEach(key => console.log(`${key}: ${value[<keyof T>key]}`));
}
//#endregion



//#region keyof property
type Transform<T extends object, V> = {
	[K in keyof T]?: V
};

export function exampleTransform() {
	let stats: CharacterStats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10
	};

	logObject2(stats, {charisma: true});
}

function logObject2<T extends object>(value: T, printKeys: Transform<T, boolean>) {
	Object.keys(printKeys)
		.filter(key => printKeys[<keyof T>key])
		.forEach(key => console.log(`${key}: ${value[<keyof T>key]}`));
}
//#endregion



//#region keyof property
type ConditionalTransform<T extends object, V> = {
	[K in keyof T as T[K] extends string ? never : K]?: V;
};

export function exampleConditionalTransform() {
	let stats = {
		strength: 17,
		dexterity: 8,
		constitution: 15,
		intellegence: 12,
		wisdom: 12,
		charisma: 10,
		name: 'Aragorn'
	};

	logObject3(stats, {constitution: true});
}

function logObject3<T extends object>(value: T, printKeys: ConditionalTransform<T, boolean>) {
	Object.keys(printKeys)
		.filter(key => printKeys[<keyof ConditionalTransform<T, boolean>>key])
		.forEach(key => console.log(`${key}: ${value[<keyof T>key]}`));
}
//#endregion