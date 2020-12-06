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

export const editKeg = (kegToEdit, selectedKeg) => {
  return {
    type: 'EDIT_KEG',
    keg: kegToEdit,
    selectedKeg: selectedKeg
  }
}

export const selectedKeg = (keg) => ({
  type: 'SELECT_KEG',
  selectedKeg: keg
}) 

export const notSelectedKeg = () => ({
  type: 'NOT_SELECT_KEG'
})