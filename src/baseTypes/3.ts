// let some: unknown;
// some = "Text";
// let str: string;
// str = some;

// export {};

//Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

let some: unknown;
some = "Text";

let str: string;

str = typeof some === "string" ? some : "";
