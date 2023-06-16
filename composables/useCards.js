import cars from "@/data/cars.json";
export const useCards = () => {
  const findCarById = (id) => {
    const foundCar = cars.find((car) => car.id === parseInt(id));
    console.log(cars);
    return foundCar;
  };

  return { cars, findCarById };
};
