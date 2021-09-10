import { PAGE_LOADER } from './types';

//types
import { InitialUiEffectStateTypes } from '../../interfaces/redux/initialUiEffectStateTypes';

const initialState: InitialUiEffectStateTypes = {
    showPageLoader: false,
};

export default function uiEffectReducer(state = initialState, action: any) {
    switch (action.type) {
        case PAGE_LOADER:
            return { ...state, showPageLoader: action.payload };
        default:
            return state;
    }
}
