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

export const editKeg = () => {
  return {
    type: 'EDIT_KEG'
    
  }
}

export const notEditKeg = () => {
  return {
    type: 'NOT_EDIT_KEG'
  }
}

export const selectedKeg = (keg) => ({
  type: 'SELECT_KEG',
  selectedKeg: keg
}) 

export const notSelectedKeg = () => ({
  type: 'NOT_SELECT_KEG'
})

export const sellPint = (id) => ({
  type: 'SELL_PINT',
  id: id
})