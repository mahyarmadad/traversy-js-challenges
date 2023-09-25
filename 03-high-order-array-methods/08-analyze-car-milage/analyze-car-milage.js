function analyzeCarMileage(cars) {
  if (!cars?.length) return {};

  let highestMileageCar = cars.find(
    (car) => car.mileage === Math.max(...cars.map((car) => car.mileage))
  );
  let lowestMileageCar = cars.find(
    (car) => car.mileage === Math.min(...cars.map((car) => car.mileage))
  );
  let totalMileage = cars.reduce((a, b) => a + b.mileage, 0);
  let averageMileage = Number((totalMileage / cars.length).toFixed(2));

  return {
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
    averageMileage,
  };
}

module.exports = analyzeCarMileage;
