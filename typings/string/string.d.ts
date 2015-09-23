declare module S {
	interface _string {
		/**
		 * This creates a new string.js object. 
		 * The parameter can be anything. 
		 * The toString() method will be called on any objects. 
		 * Some native objects are used in some functions such as toCSV().
		 */
		(s: any): _string;
		
		/**
		 * Extracts a string between left and right strings.
		 */
		between(left: string, right?: string): _string;
		
		/**
		 * Remove any underscores or dashes and convert a string into camel casing.
		 */
		camelize(): _string;
		
		/**
		 * Capitalizes the first character of a string.
		 */
		capitalize(): _string;
		
		charAt(n: number): string;
		
		/**
		 * Removes prefix from start of string.
		 */
		chompLeft(prefix: string): _string;
		
		/**
		 * Removes suffix from end of string.
		 */
		chompRight(prefix: string): _string;
		
		/**
		 * Converts all adjacent whitespace characters to a single space.
		 */
		collapseWhitespace(): _string;
		
		/**
		 * Returns true if the string contains ss.
		 * Alias: include()
		 */
		contains(ss: string): _string;
		
		/**
		 * Returns the count of the number of occurrences of the substring.
		 */
		count(substring: string): _string;
		
		/**
		 * Returns a converted camel cased string into a string delimited by dashes.
		 */
		dasherize(): _string;
		
		/**
		 * Decodes HTML entities into their string representation.
		 */
		decodeHTMLEntities(): _string;
		endsWith(...ss: string[]): _string;
		escapeHTML(): _string;
		extendPrototype(): _string;
		ensureLeft(prefix: string): _string;
		ensureRight(suffix: string): _string;
		humanize(): _string;
		include(ss: string): _string;
		isAlpha(): _string;
		isAlphaNumeric(): _string;
		isEmpty(): _string;
		isLower(): _string;
		isNumeric(): _string;
		isUpper(): _string;
		latinise(): _string;
		left(n: number): _string;
		length: number;
		lines(): string[];
		pad(len: number, char?: any): _string;
		padLeft(len: number, char?: any): _string;
		padRight(len: number, char?: any): _string;
		parseCSV(delimiter?: string, qualifier?: string, escape?: string, lineDelimiter?: string): string[];
		repeat(n: number): _string;
		replaceAll(ss: string, newtr: string): _string;
		restorePrototype();
		right(n: number): _string;
		s: string;
		setValue(value: string): _string;
		slugify(): _string;
		splitLeft(sep: string, maxSplit?: number, limit?: number): _string;
		splitRight(sep: string, maxSplit?: number, limit?: number): _string;
		startsWith(...prefix: string[]): _string;
		strip(...strings: string[]): _string;
		stripLeft(chars?: any): _string;
		stripRight(chars?: any): _string;
		stripPunctuation(): _string;
		stripTags(...tags: string[]): _string;
		template(str: any, open?: string, close?: string): _string;
		times(n: number): _string;
		titleCase(): _string;
		toBoolean(): boolean;
		toBool(): boolean;
		toCSV(...options: any[]): _string;
		toFloat(precision?: number): number;
		toInteger(): number;
		toInt(): number;
		toString(): string;
		trim(): _string;
		trimLeft(): _string;
		trimRight(): _string;
		truncate(length: number, chars?: string): _string;
		underscore(): _string;
		unescapeHTML(): _string;
		wrapHTML(...options: any[]): _string;
		VERSION: string;
		
		// Native JavaScript string methods
		substr(first: number, last: number): _string;
		concat(str: string): _string;
		indexOf(str: string): number;
	}
	
	export var VERSION;
	export var TMPL_OPEN;
	export var TMPL_CLOSE;
	export function extendPrototype();
	export function restorePrototype();
}

declare function S(s: any): S._string;

declare module "string" {
	export = S;
}
