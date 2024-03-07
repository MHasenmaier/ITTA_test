/*  code 1
    const welcomeText = "Hello World";
    console.log(welcomeText);
*/

/*  code 2
    import { open } from "node:fs/promises";

    const file = await open("./input.txt");

    for await (const line of file.readLines()) {
        console.log(line);
    }

    await file.close();
*/

import { open } from "node:fs/promises";

/** REQ 2
 * 
 */
const outputFile = await open("./output.txt", "w");
//const writeInOutputFile = "Something";          //modified due to flexibility 
//await outputFile.write(writeInOutputFile);

/** REQ 3
 * 
*/
const splitInputIntoWords = (input) => {
    const words = input.split(" ");
    return words;
};

/** REQ 4
 * 
*/
await readFileAndApply("./input.txt", async (line) => {
    const words = splitInputIntoWords(line);
    for await (const word of words){
        await outputFile.write(`${word}\n`);
    }
    console.log("finished");    //modified for debugging
});

/** REQ 5
 * start "node index.mjs"
*/
/** REQ1
 * @param {string} inputFile - The path to the file to read
 * @param {function} handler - The callback function to be applied for each element
 * @example
 *  await readFileAndApply('./input.txt', async (line) => {});
 */
async function readFileAndApply(inputFile, handler) {
    const file = await open(inputFile);
    for await (const line of file.readLines()) {
      handler(line);
    }
    await file.close();
}

/**
 * **
 * MODEL SOLUTION
 * **
//import { open } from "node:fs/promises";
//
//const outputFile = await open("./output.txt", "w");
//
//const splitInputIntoWords = (input) => {
    //  const words = input.split(" ");
    //  return words;
    //};
    //
    //await readFileAndApply("./input.txt", async (line) => {
//  const words = splitInputIntoWords(line);
//  for await (const word of words) {
    //    await outputFile.write(`${word}\n`);
    //  }
    //});
    //
    ///**
    // *
    // * @param {string} inputFile - The path to the file to read
    // * @param {function} handler - The callback function to be applied for each element
    // * @example
    // *  await readFileAndApply('./input.txt', async (line) => {});
// */
//async function readFileAndApply(inputFile, handler) {
    //    const file = await open(inputFile);
    //    for await (const line of file.readLines()) {
        //      handler(line);
        //    }
//    await file.close();
//  }
// */