import m from 'mithril'
import UserList from './views/UserList'

m.route(document.body, "/", {
    "/": UserList
})