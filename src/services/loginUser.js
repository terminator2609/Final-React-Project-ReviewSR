const postCheckUser = (user) => {

  return  fetch("http://localhost:5000/auth/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}

export default postCheckUser