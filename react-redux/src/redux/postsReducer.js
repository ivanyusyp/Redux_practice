import { CREATE_POST, FETCH_POSTS } from './types';

const initialState = {
	posts: [],
	fetchedPosts: []
}

//Pure Function
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { ...state, posts: state.posts.concat([action.payload]) }
		// return { ...state, posts: [...state.posts, action.payload] } equals code above, but with using ES6 syntaxys
		case FETCH_POSTS:
			return { ...state, fetchedPosts: action.payload }
		default: return state
	}
}