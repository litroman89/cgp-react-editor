import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
};

export const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.blocks = [...state.blocks, action.payload];
    },
    moveBlock: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const blocks = [...state.blocks];
      const [movedBlock] = blocks.splice(fromIndex, 1);
      blocks.splice(toIndex, 0, movedBlock);
      return {
        blocks,
      };
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBlock, decrement, incrementByAmount } = blocksSlice.actions;

export default blocksSlice.reducer;
