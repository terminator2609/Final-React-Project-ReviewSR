const postNewSSD = (data) => {
    return fetch("http://localhost:5000/createProduct/createComponent/createSSD", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

export default postNewSSD