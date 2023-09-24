function calculateTotalSalesWithTax(products, taxRate) {
  if (products?.length < 1) return 0;
  let sumSale = products.reduce((a, b) => a + b.quantity * b.price, 0);
  let tax = sumSale * (taxRate / 100);
  return sumSale + tax;
}

module.exports = calculateTotalSalesWithTax;
