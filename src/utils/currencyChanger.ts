export const currencyChanger = (price: number) => {
  if (price) {
    return price
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
      .split(".")[0];
  }
  return 0;
};
// Test
