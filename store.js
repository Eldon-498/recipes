const recipesReducer = (state = initialState, action) => {
    switch(action.type) {
      
      case 'allRecipes/loadData':
        return { 
          ...state,
          allRecipes: action.payload
        }
      
      case 'searchTerm/clearSearchTerm':
        return {
          ...state,
          searchTerm: ''
        }
      
      case 'searchTerm/setSearchTerm':
        return {
          ...state, 
          searchTerm: action.payload
        };
  
      case 'favoriteRecipes/addRecipe':
        return {
          ...state,
          favoriteRecipes: [...state.favoriteRecipes, action.payload]
        };
  
      case 'favoriteRecipes/removeRecipe':
        return {
          ...state,
          favoriteRecipes: state.favoriteRecipes.filter(element => element.id !== action.payload.id)
        };
  
      default:
        return state;
    }
  };
  const reducers = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer
  }
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer);
  