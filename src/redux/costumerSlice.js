import { createSlice} from '@reduxjs/toolkit'

export const costumerSlice = createSlice({
    name: 'costumers',
    initialState: [
        {
          id: 1,
          name: 'Pedro Yanez',
          email: 'pedro@email.com',
          number: 956479784,
          address: 'rua manoel dias , 40'
    
        },
        {
          id: 2,
          name: 'Jõao Paulo',
          email: 'jp@email.com',
          number: 956479547,
          address: 'rua manoel carlos , 80'
    
        },
        {
          id: 3,
          name: 'Pamela Ferraz',
          email: 'pamela@email.com',
          number: 956479587,
          address: 'rua do orfanato , 27'
    
        }
    ],
    reducers: {
        addCostumer: (state, action) => {
            const costumer = {
                id: Math.floor(Math.random() * 10000) + 1,
                name: action.payload.title,                
                email: action.payload.email,
                number: action.payload.number,
                address: action.payload.address,
            };
            state.push(costumer)
        },
    },
});

export const { addCostumer } = costumerSlice.actions;

export default costumerSlice.reducer;