const initState = JSON.parse(localStorage.getItem('setting')) || {
    NotAllowSignIn: false,
    DisableBalanceonAdd: false,
    DisableBalanceonEdit: false
}

const SettingsReducers = (state = initState, action) => {
    switch (action.type) {
        case 'NotAllowSignIn':
            console.log('NotAllowSignIn', action.checked)
            const NotAllowSignIn = {
                ...state,
                NotAllowSignIn: action.checked
            }
            localStorage.setItem('setting', JSON.stringify(NotAllowSignIn))
            return NotAllowSignIn

        case 'DisableBalanceonAdd':
            console.log('DisableBalanceonAdd', action.checked)
            const DisableBalanceonAdd = {
                ...state,
                DisableBalanceonAdd: action.checked
            }
            localStorage.setItem('setting', JSON.stringify(DisableBalanceonAdd))
            return DisableBalanceonAdd

        case 'DisableBalanceonEdit':
            console.log('DisableBalanceonEdit', action.checked)
            const DisableBalanceonEdit = {
                ...state,
                DisableBalanceonEdit: action.checked
            }
            localStorage.setItem('setting', JSON.stringify(DisableBalanceonEdit))
            return DisableBalanceonEdit
        default:
            return state
    }
}

export default SettingsReducers