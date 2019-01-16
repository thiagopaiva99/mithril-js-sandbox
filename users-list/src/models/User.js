import m from 'mithril'

const User = {
    list: [],
    loadList: () => 
        m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
        .then(users => User.list = users.data)
}

export default User