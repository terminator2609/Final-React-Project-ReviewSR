
const postMobileDevice = (data) => {
    return fetch("http://localhost:5000/createProduct/mobileDevice", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    })
}

export default postMobileDevice