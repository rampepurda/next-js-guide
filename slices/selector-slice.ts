import { createSlice, createSelector } from "@reduxjs/toolkit"

type Init = {
  x: number,
  y: number,
  z: number,
  txt: string
}

const initialState: Init = { x: 1, y: 2, z: 3, txt: 'Prague' };

export const CounterSlice = createSlice({
  //const myValue = useAppSelector(state: AppState) => state.
  name: "counterSlice",
  initialState,
  reducers: {
    // action creators to be auto-generated
    incrementX(state, action) {
      state.x += action.payload;
    },
    incrementY(state, action) {
      state.y += action.payload;
    },
    incrementZ(state, action) {
      state.z += action.payload;
    }
  }
});
export const {
  incrementX,
  incrementY,
  incrementZ
} = CounterSlice.actions


/**
 * Try to define reusable selectors alongside their corresponding reducers.
 * input selectors
 */

const selectX = (state: any) => state.x;
const selectY = (state: any) => state.y;
const selectZ = (state: any) => state.z;

export const selectSum = createSelector(
  [selectX, selectY, selectZ], // notation 1
  (x, y, z) => x + y + z
)


/*
const selectProduct = createSelector(
  selectX, // notation 2
  selectY,
  selectZ,
  (x, y, z) => x * y * z
)
const selectMySum = createSelector(
  selectSum,
  selectProduct,
  (state, i) => i,
  (s, p, i) => s + p + i
);
 */


//export { selectSum };
