const postNewMotherboard = (data) => {
    return fetch("http://localhost:5000/createProduct/createComponent/createMotherboard", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

export default postNewMotherboard