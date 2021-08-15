const types = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
}
export const actionCreators = { // Khởi tạo 3 hành động.
    loading: () => ({ type: types.LOADING }),
    failure: () => ({ type: types.FAILURE }),
    success: (payload) => ({ type: types.SUCCESS, payload }),
}

export const initialState = {
    loading: true,
    error: false,
    hotels: [],
}
export function reducer(state, action) {
    switch (action.type) {
        case types.LOADING:
            return { ...state, loading: true, error: false };
        case types.SUCCESS:
            return { ...state, loading: false, error: false, hotels: action.payload };
        case types.FAILURE:
            return { ...state, loading: false, error: true };
    }
}
