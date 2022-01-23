export const formatPrice = (price) => {
  let arrayChar = (price + "").split("");
  let result = "";
  let flag = 0;
  for (let i = arrayChar.length - 1; i >= 0; i--) {
    if (flag % 3 === 0 && flag !== 0) {
      result = arrayChar[i] + "," + result;
      flag = 0;
    } else {
      result = arrayChar[i] + result;
      flag += 1;
    }
  }
  return result;
};
