//number of boxed you would need for tiles

"use strict";

const length = 10;
const width = 12;
const area = length * width;
const numTiles = Math.ceil(area / 12);
const numTilesWithExtra = Math.ceil(numTiles * 1.1);
console.log(`The number of boxes of tiles required is ${numTiles} boxes.`);
console.log(`The number of boxes with extra tiles is ${numTilesWithExtra} boxes.`);


