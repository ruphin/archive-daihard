#!/usr/local/bin/node

const { soliditySha3 } = require("web3-utils");

const answer =
  "0x820b25046cc144c5c0cff21af15e3387f538c5278cb097a77599041182b8ca17";
const disarmCode =
  "A Yuletide number - 0x?2CD?b3a2DEDCb?b???E?Ca2????C??C2bCba?DE2D?C???????";
// const missingChars = "gcg2efdgaebg3g2g3gaebc";

// const missingChars = "gCg2EFDgaEbg3g2G3gaEbC";
const missingChars = "gCg2EFDgaDbg3g2G3gaDbC";
const missingCharsHash = soliditySha3(missingChars);
console.log(soliditySha3(missingCharsHash, disarmCode, false, true));

// const answer =
// "0xffb764ebcdde89f62146ab2e3415f73cca3ba46f13fdccaa6fbeb95f569e2295";
// console.log(soliditySha3("gCg2EFDgaEbg3g2G3gaDbC", disarmCode, 0x00, 0x00));

// function combinations(chosen, rest) {
//   if (rest.length === 0) {
//     return test(chosen);
//   }
//   const newRest = rest.slice(1);
//   const nextChar = rest.charAt(0);
//   if (combinations(chosen + nextChar, newRest)) {
//     return true;
//   } else if (nextChar < "0" || nextChar > "9") {
//     return combinations(chosen + rest.charAt(0).toUpperCase(), newRest);
//   }
//   return false;
// }

// function test(candidate) {
//   const hash1 = soliditySha3(soliditySha3(candidate), disarmCode, false, true);
//   const hash2 = soliditySha3(soliditySha3(candidate), disarmCode, true, true);
//   const hash3 = soliditySha3(soliditySha3(candidate), disarmCode, false, false);
//   const hash4 = soliditySha3(soliditySha3(candidate), disarmCode, true, false);
//   if (
//     hash1 === answer ||
//     hash2 === answer ||
//     hash3 === answer ||
//     hash4 === answer
//   ) {
//     console.log(candidate);
//     return true;
//   }
//   return false;
// }

// console.log(combinations("", missingChars));
