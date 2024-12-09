const getNotAfterRules = (rules: string[]) => {
  // create a dictionary of rules: num => nums that can't come after
  const notAfter: Record<string, string[]> = {};

  rules.forEach((rule) => {
    const [before, after] = rule.split("|");

    if (notAfter.hasOwnProperty(after)) {
      notAfter[after].push(before);
    } else {
      notAfter[after] = [before];
    }
  });

  return notAfter;
};

export default getNotAfterRules;
