export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove after finish developing
  // token:
  //   "BQDodfgTWYxLx2_ir8jNE7l88W_kMUbDv0j7fmHIh8tfiXg5KHKcXumE4Hf4DvhsADSvMHqmQkhjWIn1_Vjslu21iyDjo4BhIv9TvuC_CneqT_dmbwkpy_uw0XDhvl9CKFYDwYQbiao6JNGYKYHcCCsVCwSQdYitIBHaOAWe4gds03YO",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
