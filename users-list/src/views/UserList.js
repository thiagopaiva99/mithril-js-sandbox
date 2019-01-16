import m from 'mithril'
import User from '../models/User'

const UserList = {
    oninit: User.loadList,
    view: () => 
        m(".user-list", User.list.map(user =>
            m(".user-list-item", `${user.firstName} ${user.lastName}`)
        ))
}

export default UserList