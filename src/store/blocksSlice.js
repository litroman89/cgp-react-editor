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
    changeData: (state, action) => {
      const { id, updatedData } = action.payload;
      state.blocks.find((block) => block.id === id).data = updatedData;
    },
    moveBlockUp: (state, action) => {
      const { id } = action.payload;
      const blocks = [...state.blocks];
      const index = blocks.findIndex((block) => block.id === id);
      if (index > 0) {
        const [movedBlock] = blocks.splice(index, 1);
        blocks.splice(index - 1, 0, movedBlock);
        state.blocks = blocks;
      }
    },
    moveBlockDown: (state, action) => {
      const { id } = action.payload;
      const blocks = [...state.blocks];
      const index = blocks.findIndex((block) => block.id === id);
      if (index >= 0) {
        const [movedBlock] = blocks.splice(index, 1);
        blocks.splice(index + 1, 0, movedBlock);
        state.blocks = blocks;
      }
    },
    copyBlock: (state, action) => {
      const { id } = action.payload;
      const index = state.blocks.findIndex((block) => block.id === id);

      //create new id for copied block
      const newId = crypto.randomUUID();
      state.blocks.splice(index + 1, 0, {
        ...state.blocks.find((block) => block.id === id),
        id: newId,
      });
    },
    deleteBlock: (state, action) => {
      const { id } = action.payload;
      state.blocks = state.blocks.filter((block) => block.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBlock,
  changeData,
  moveBlockUp,
  moveBlockDown,
  copyBlock,
  deleteBlock,
} = blocksSlice.actions;

export default blocksSlice.reducer;
