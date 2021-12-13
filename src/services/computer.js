const postNewComputer = (data) => {
   return fetch("http://localhost:5000/createProduct/computer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

export default postNewComputer