export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const {name, brand, abv, price, pintsLeft, id} = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    abv: abv,
    price: price,
    pintsLeft: pintsLeft,
    id: id
  }
}