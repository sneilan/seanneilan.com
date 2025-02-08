import { forEach, includes, flatten, filter } from "lodash";
const numberConverter = require("number-to-words");

const ones_names = {
  0: "",
  1: "un",
  2: "duo",
  3: "tre",
  4: "quattuor",
  5: "quin",
  6: "se",
  7: "septe",
  8: "octo",
  9: "nove",
};

const tens_names = {
  0: "",
  1: "deci",
  2: "viginti",
  3: "triginta",
  4: "quadraginta",
  5: "quinquaginta",
  6: "sexaginta",
  7: "septuaginta",
  8: "octoginta",
  9: "nonaginta",
};

const hundreds_names = {
  0: "",
  1: "centi",
  2: "ducenti",
  3: "trecenti",
  4: "quadringenti",
  5: "quingenti",
  6: "sescenti",
  7: "septingenti",
  8: "octingenti",
  9: "nongenti",
};

const ones_combiners = {
  0: [],
  1: [],
  2: [],
  3: ["s", "x"],
  4: [],
  5: [],
  6: ["s", "x"],
  7: ["m", "n"],
  8: [],
  9: ["m", "n"],
};

const tens_combiners = {
  0: [],
  1: ["n"],
  2: ["m", "s"],
  3: ["n", "s"],
  4: ["n", "s"],
  5: ["n", "s"],
  6: ["n"],
  7: ["n"],
  8: ["m", "x"],
  9: [],
};

const hundreds_combiners = {
  0: [],
  1: ["n", "x"],
  2: ["n"],
  3: ["n", "s"],
  4: ["n", "s"],
  5: ["n", "s"],
  6: ["n"],
  7: ["n"],
  8: ["m", "x"],
  9: [],
};

const normal_no_illion = {
  0: "thousand",
  1: "milli",
  2: "billi",
  3: "trilli",
  4: "quadrilli",
  5: "quintilli",
  6: "sextilli",
  7: "septilli",
  8: "octilli",
  9: "nonilli",
};

const tableColors = ["red", "yellow", "blue"];

export const splitNumber = (n_str: string) => {
  // This takes a numb  er and splits it into groups of 3 digits
  const result: string[] = [];

  while (n_str.length > 3) {
    const dig = n_str.slice(n_str.length - 3);
    result.push(dig[0] + dig[1] + dig[2]);
    n_str = n_str.slice(0, n_str.length - 3);
  }

  if (n_str.length > 0) {
    result.push(n_str);
  }

  result.reverse();

  return result;
};

export const getPowers = (n: string) => {
  return splitNumber(n).map(function (group) {
    return parseInt(group);
  });
};

const commonLetter = (a: string[], b: string[]) => {
  // returns a common element lists. null otherwise
  for (let i = 0; i < a.length; i++) {
    if (includes(b, a[i])) {
      return a[i];
    }
  }

  return null;
};

const getName = (n: number): string => {
  let ret: string[] = [];

  // do not need the conway weschler algorithm to determine the name of anything less than 10^33
  if (n < 10 && n >= 0) {
    const ones_name = normal_no_illion[n];
    if (typeof ones_name != "string") {
      throw Error();
    }
    ret.push(ones_name);
    return ret.join("");
  }

  if (n < 0) {
    return ret.join("");
  }

  // find the number of hundreds, tens and ones that fit into n & get the appropriate name
  let q = n;
  const n_hundreds = Math.floor(q / 100);
  let hundreds = "";
  if (n_hundreds > 0) {
    hundreds = hundreds_names[n_hundreds];
  }

  q %= 100;
  const n_tens = Math.floor(q / 10);
  let tens = "";
  if (n_tens > 0) {
    tens = tens_names[n_tens];
  }

  const n_ones = q % 10;
  let ones = "";
  if (n_ones > 0) {
    ones = ones_names[n_ones];
  }

  ret.push(ones);

  // find the combining letters, if any
  const ones_and_tens_letter = commonLetter(
    ones_combiners[n_ones],
    tens_combiners[n_tens]
  );

  if (ones_and_tens_letter !== null) {
    debugger;
    ret.push(n_ones !== 3 ? ones_and_tens_letter : "s"); // for special case of tre, only add 's'
  } else if (!tens) {
    // can't use a common letter between ones and tens, ones and hundreds
    const ones_and_hundreds_letter = commonLetter(
      ones_combiners[n_ones],
      hundreds_combiners[n_hundreds]
    );
    if (ones_and_hundreds_letter !== null) {
      // for special case of tre, only add 's'
      ret.push(n_ones !== 3 ? ones_and_hundreds_letter : "s");
    }
  }

  ret.push(tens);
  ret.push(hundreds);

  ret = filter(ret, (word: string) => {
    return word !== "";
  });

  // remove any vowels at the end

  let lastName = ret[ret.length - 1];

  if (includes(["a", "e", "i", "o", "u"], lastName[lastName.length - 1])) {
    lastName = lastName.slice(0, lastName.length - 1);
    ret[ret.length - 1] = lastName;
  }

  return ret.join("");
};

export const bigNumExp = (n: string): string => {
  /*
  Returns the english name of any nth power of 10 (10^n) up to infinity
  Takes a string so we don't need to use a big integer library.
  */
  const ret: string[] = [];

  if (n === "") {
    return "";
  }

  const q = Math.floor((parseInt(n) - 3) / 3);

  // if q is 999 or less, don't need to combine names with illi
  if (q <= 999) {
    ret.push(getName(q));

    if (q > 9) {
      ret.push("illion");
    } else if (q > 0) {
      ret.push("on");
    }

    return ret.join("");
  }

  // // otherwise, we have to use the 1,000,000,000,000W ... 1000000X + 1000Y + Z algorithm
  let name = "";
  let powers = getPowers(q); // powers is arranged from highest to lowest
  let i = 0;
  forEach(powers, function (power: number) {
    ret.push(power > 0 ? getName(power) : "nilli");
    name += power > 0 ? getName(power) : "nilli";
    // combine each name with illi
    if (
      i < powers.length - 1 &&
      name.slice(name.length - 4, name.length) !== "illi"
    ) {
      name += "illi";
      ret.push("illi");
    }
    i += 1;
  });

  // if the last name begins with anything other than i, add illion
  // otherwise add on
  name += name.slice(name.length) === "i" ? "on" : "illion";
  ret.push(name.slice(name.length) === "i" ? "on" : "illion");

  return ret.join("");
};

export const printNumber = (n: string) => {
  const groups = splitNumber(n);
  const ret: string[] = [];
  let i = 0;
  forEach(groups, (group: string) => {
    if (group !== "000") {
      const powerName = bigNumExp("" + 3 * (groups.length - (i + 1)));
      const smallName = numberConverter.toWords(parseInt(group)) as string;
      ret.push(smallName);
      ret.push(powerName);
    }
    i += 1;
  });

  return ret.join(" ");
};
