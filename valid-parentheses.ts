function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let a = 0; a < s.length; a++) {
    switch (s[a]) {
      case "(":
      case "{":
      case "[":
        stack.push(s[a]);

        break;
      case ")":
        const temp1 = stack.pop();
        if (temp1 !== "(") {
          console.log({ temp1 });
          return false;
        }
        break;
      case "}":
        const temp2 = stack.pop();
        if (temp2 !== "{") {
          return false;
        }
        break;
      case "]":
        const temp3 = stack.pop();
        if (temp3 !== "[") {
          return false;
        }
        break;
    }
  }

  return stack.length == 0;
}

const res = isValid("()");
console.log({ res });
