import action from '../../../request/Action'
import http from '../../../request/http'
import Until from '../../../until/until'
let getUserid_byid = action.getUserid

export function getUserIdentity(arg) {
    let _this = arg
    let data = {
        userType: Until.getUser().user.userType,
        // userType: 3,
        token: Until.getUser().token
        // token: 'af219a9aa8e7444cb81ac947b17e14f4'
    }
    http.post(getUserid_byid, data).then((res) => {
        console.log(res.smallInfo)
        if(res.smallInfo) {
            sessionStorage.setItem('userSmallInfo', JSON.stringify(res.smallInfo))
            // 1.未认证
            if(res.smallInfo.claimState == 1) {
                _this.$router.push({
                    path: '/MakeSure'
                })
            }
            //  2.认证中
            if(res.smallInfo.claimState == 2) {
                _this.$router.push({
                    path: '/MakeSure'
                })
            }
            //  3.已认证
            if(res.smallInfo.claimState == 3) {
                _this.$router.push({
                    path: '/Personal'
                })
            }
        } else {
            _this.$message.error('身份认证错误!')
        }
    })
}