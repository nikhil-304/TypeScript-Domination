let accBalance: number = 0;

export function addPayment(val: number) {
  accBalance += val;
  console.log(val);
}

export function getDetails() {
  console.log(accBalance);
}
