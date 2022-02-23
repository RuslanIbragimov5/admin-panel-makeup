function filteredByOrders(array, status) {
  return array.filter((product) => {
    return product.status === status;
  });
}
