import action from '../../../request/Action'
import http from '../../../request/http'
import Until from '../../../until/until'
let getUserid_byid = action.getUserid

export function getUserIdentity() {
    let data = {
        // userType: Until.getUser().user.userType,
        userType: 3,
        token: Until.getUser().token
        // token: 'af219a9aa8e7444cb81ac947b17e14f4'
    }
    http.post(getUserid_byid, data).then((res) => {
        console.log(res.smallInfo)
        if(res.smallInfo) {
            sessionStorage.setItem('userSmallInfo', JSON.stringify(res.smallInfo))
        }
    })
}