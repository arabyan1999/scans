import {
    ADD_USERS,
    ADD_SCANS
} from "./action"
let globalState = {
    users: [],
    scans: []
}

export default function(state = globalState, action) {
    console.log('action.usersData', action.usersData)
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: action.usersData
            }
        case ADD_SCANS:
            return {
                ...state,
                scans: action.scansData
            }
        default:
            return state
    }
}