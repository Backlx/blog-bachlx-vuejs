import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        post: [
            {
                title: "Post one",
                description: "This is example"
            },
            {
                title: "Post two",
                description: "This is example"
            },
            {
                title: "Post three",
                description: "This is example"
            },
            {
                title: "Post four",
                description: "This is example"
            },
            {
                title: "Post five",
                description: "This is example"
            },
            {
                title: "Post six",
                description: "This is example"
            }
        ]
      }
    },
  })

  export default store
  
