const isLowerCase = (text, rate = 100) => {
  if (text && typeof text === "string") {
    if (typeof rate === "number" && rate > 0 && rate <= 100) {
      const chars = text.split("");
      const { length } = chars;
      const threshold = (rate / 100) * length;
      let good = 0;
      let bad = 0;
      for (let i = 0; i < length; i += 1) {
        if (chars[i] === chars[i].toLowerCase()) good += 1;
        else bad += 1;
        if (bad > length - threshold) return false;
        if (good >= threshold) return true;
      }
    }
    throw new Error("The argument 'rate' must be an number beetwen 0 and 100.");
  }
  throw new Error("The argument 'text' must be a non-empty string.");
};

const isUpperCase = (text, rate = 100) => {
  if (text && typeof text === "string") {
    if (typeof rate === "number" && rate > 0 && rate <= 100) {
      const chars = text.split("");
      const { length } = chars;
      const threshold = (rate / 100) * length;
      let good = 0;
      let bad = 0;
      for (let i = 0; i < length; i += 1) {
        if (chars[i] === chars[i].toUpperCase()) good += 1;
        else bad += 1;
        if (bad > length - threshold) return false;
        if (good >= threshold) return true;
      }
    }
    throw new Error("The argument 'rate' must be an number beetwen 0 and 100.");
  }
  throw new Error("The argument 'text' must be a non-empty string.");
};

const isSentenceCase = (text, rate = 100) => {
  if (text && typeof text === "string") {
    if (typeof rate === "number" && rate > 0 && rate <= 100) {
      if (text[0] !== text[0].toUpperCase()) return false;
      const { length } = text;
      if (length === 1) return true;
      return isLowerCase(
        text.substring(1),
        (rate * length - 100) / (length - 1)
      );
    }
    throw new Error("The argument 'rate' must be an number beetwen 0 and 100.");
  }
  throw new Error("The argument 'text' must be a non-empty string.");
};

function isCapitalCase(text, rate = 100) {
  if (text && typeof text === "string") {
    if (typeof rate === "number" && rate > 0 && rate <= 100) {
      const chunks = text.split(/\r\n|\x20/);
      const { length } = chunks;
      const threshold = (rate / 100) * length;
      let good = 0;
      let bad = 0;
      for (let i = 0; i < length; i += 1) {
        if (isSentenceCase(chunks[i], rate)) good += 1;
        else bad += 1;
        if (bad > length - threshold) return false;
        if (good >= threshold) return true;
      }
    }
    throw new Error("The argument 'rate' must be an number beetwen 0 and 100.");
  }
  throw new Error("The argument 'text' must be a non-empty string.");
}

export { isLowerCase, isUpperCase, isSentenceCase, isCapitalCase };
