const ADD_TODO = 'ADD_TODO'

export function addTodo(subreddit) {
  return {
    type: ADD_TODO,
    text: 'Build my first Redux app'
  }  
}