const postNewCPU = (data) => {
    return fetch("http://localhost:5000/createProduct/createComponent/createCPU", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

export default postNewCPU