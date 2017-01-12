const UPDATE_KNIGHT_POSITION = 'drag-and-thall/game/UPDATE_KNIGHT_POSITION';


export function updateKnightPosition(position) {
  return {
    type: UPDATE_KNIGHT_POSITION,
    position
  }
}

const initialState = {
  position: [0, 0]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_KNIGHT_POSITION:
      return Object.assign({}, {position:action.position});
    default:
      return state;
  }
}

