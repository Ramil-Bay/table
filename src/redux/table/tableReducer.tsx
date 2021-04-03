import { SELECTED_ELEMENT } from './tableTypes';

interface InitialState {
    elemSymbol: string | null,
    elemName: string | null,
    id: number | null,
    elemWeight: number | null,
    color: string | null
}

interface IAction {
    type: string;
    payload: InitialState;
}

const initalState: InitialState = {
    elemSymbol: null,
    elemName: null,
    id: null,
    elemWeight: null,
    color: null
}

const tableReducer = (state = initalState, {type, payload}: IAction):InitialState => {
    console.log(state);
    switch (type) {
        case SELECTED_ELEMENT: 
            return {
                ...state,
                ...payload,
            }
        default: return state
    }
}

export default tableReducer;