
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

// asynchronous action creator
export const fetchData = () => {
    // console.log('teste')
    // return (dispatch) => {
    //     return fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => dispatch(
    //             { type: "FetchData", data: json }))
    //         .catch(err => dispatch(
    //             { type: "ERROR",msg: "Unable to fetch data" }))
    // }

}