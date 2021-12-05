
const postNewUser = (user) => {

    fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}

export default postNewUser