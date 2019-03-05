<template>
    <div class="dialog">
        <el-dialog @closed='closeDialog' @opened='searchSubject()' title="选择作品" :visible.sync="dialogFormVisible" center width='984px'>
            <div class="search">
                <input v-model="search_name" class="input" type="text" placeholder="搜索作品名称">
                <button class="btn" @click="searchSubject">搜 索</button>
            </div>
            <div class="job">
                <p class="title">担任的职位：</p>
                <el-select v-model="value" placeholder="请选择" style="width:238px">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="works" v-if="works.length > 0">
                <div class="work" v-for="(item,index) in works" :key='index' @click="chose(item,index)">
                    <div :class="active.includes(index) ? 'activeIcon' : 'icon'"></div>
                    <img width="180px" height="253px" :src="item.subjectUrl">
                    <div class="info">
                        <p class="name">名称：{{item.subjectName}}</p>
                        <p class="time">时间：{{item.releaseDate ? item.releaseDate[0] : ''}}</p>
                    </div>
                </div>
            </div>
            <el-pagination class="works-page"
                small
                layout="prev, pager, next"
                :current-page='current'
                :total="total"
                @current-change='changePage'
            >
            </el-pagination>
            <div class="table">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                     <el-table-column
                        type="index"
                        width="60"
                        label="序号">
                    </el-table-column>
                    <el-table-column
                        prop="subjectName"
                        label="作品名称"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="releaseDate"
                        label="作品时间"
                        width="180">
                        <!-- <template slot-scope="scope">
                            {{scope.id }}
                        </template> -->
                    </el-table-column>
                    <el-table-column
                        prop="job"
                        label="担任职位">
                    </el-table-column>
                    <el-table-column
                        prop="subjectIntroduce"
                        label="作品描述">
                    </el-table-column>
                </el-table>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button class="dialogBtn" @click="dialogFormVisible = false">取 消</el-button>
                <el-button class="dialogBtn submit" type="primary" @click="makeSure">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Until from '../../../../until/until.js'
export default {
    props:['showDialog'],
    data(){
        return{
            search_name: '', // 搜索作品名称
            dialogFormVisible:false,
            options:[           //选项
                {
                    value:'1',
                    label:'导演'
                },
                {
                    value:'2',
                    label:'编剧'
                },
                {
                    value:'3',
                    label:'演员'
                },
            ],
            value:'演员',       //选中项
            current: 1,
            total: 0,
            works:[             //作品
                // {
                //     name:'来电狂想1',
                //     time:'2018.02.13'
                // },
                // {
                //     name:'来电狂想2',
                //     time:'2018.02.13'
                // },
                // {
                //     name:'来电狂想3',
                //     time:'2018.02.13'
                // },
                // {
                //     name:'来电狂想4',
                //     time:'2018.02.13'
                // },
                // {
                //     name:'来电狂想5',
                //     time:'2018.02.13'
                // },
                // {
                //     name:'来电狂想6',
                //     time:'2018.02.13'
                // },
                // {
                //     name:'来电狂想7',
                //     time:'2018.02.13'
                // },
            ],
            tableData: [],
            ischose:'icon',       //选择图标
            active:[],          //选择作品索引
            choseWorks:[],      //选择作品
        }
    },
    methods:{
        // 搜索电影名
        searchSubject() {
            let data = {
                subjectName: this.search_name,
                pageNum: this.current,
            }
            this.Http.post(this.Action.getSubject, data).then((res) => {
                console.log(res)
                this.works = res.list
                this.current = res.page
                this.total = res.total
            })
        },
        closeDialog() {
            this.search_name = ''
            this.current = 1
            this.total = 0
            this.works = []
            this.tableData = []
            this.active = []
            this.choseWorks = []
        },
        // 修改页数
        changePage(current) {
            this.current = current
            this.searchSubject()
        },
        makeSure(){     //提交
            let arr = []
            let choseWorks = this.tableData
            for(let i = 0, length = choseWorks.length; i < length; i ++) {
                arr.push({
                    // celebrityId: Until.getUserSmallInfo().id,
                    celebrityId: 1046960,
                    subjectId: choseWorks[i].id,
                    // celebrityType: Until.getUser().user.userType
                    celebrityType: 3
                })
            }
            let data = {
                celebritySubjectJson: JSON.stringify(arr),
                token: Until.getUser().token
            }
            console.log(data)
            this.Http.post(this.Action.personAddSub, data).then(res => {
                this.$message({
                    message: '提交成功',
                    type: 'success'
                })
            })
        },
        openDialog(num){        //打开弹窗
            this.dialogFormVisible = true
        },
        chose(item,index){            //选择作品
            console.log(item, index)
            if(this.active.includes(index)){
                let num = this.active.indexOf(index)
                this.active.splice(num,1)
                this.choseWorks.splice(num,1)
            }else{
                this.active.push(index)
                this.choseWorks.push(item)
            }
            console.log(this.choseWorks)
            this.setAddTable()
        },
        // 设置添加表格
        setAddTable() {
            this.tableData = this.choseWorks
        }
    }
}
</script>
<style lang="less" scoped>
    .dialog{
        .el-dialog{
            .search{
                width: 380px;
                display: flex;
                justify-content: space-around;
                margin-bottom: 30px;
                .input{
                    width: 280px!important;
                    height: 40px!important;
                    display: inline-block;
                    outline: none;
                    border: 1px solid #DDDDDD;;
                    box-sizing: border-box;
                    text-indent: 20px;
                }
                .btn{
                    height: 40px;
                    width: 100px;
                    background-color: #F58523;
                    border:none;
                    color: #fff;
                    font-family: PingFang-SC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    letter-spacing: 0.97px;
                    text-align: center;
                }
            }
            .job{
                margin-bottom: 50px;
                .title{
                    display: inline-block;
                    font-family: PingFang-SC-Medium;
                    font-size: 16px;
                    color: #4A4A4A;
                    letter-spacing: 0;
                    line-height: 16px;
                    margin-right: 42px;
                }
            }
            .works{
                overflow-x: scroll;
                height: 276px;
                display: flex;
                margin-bottom: 10px;
                .work{
                    position: relative;
                    margin-right: 20px;
                    display: inline-block;
                    .icon{
                        position: absolute;
                        height: 16px;
                        width: 16px;
                        background-image: url('../../../../assets/img/choseNot.png');
                        right: 14px;
                        top:14px;
                    }
                    .activeIcon{
                        position: absolute;
                        height: 16px;
                        width: 16px;
                        background-image: url('../../../../assets/img/chosed.png');
                        right: 14px;
                        top:14px;
                    }
                    .info{
                        position: absolute;
                        bottom: 0;
                        background: rgba(0,0,0,0.6);
                        font-family: PingFang-SC-Medium;
                        font-size: 14px;
                        color: #FFFFFF;
                        letter-spacing: 0;
                        height: 60px;
                        width: 180px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        padding-left: 14px;
                        box-sizing: border-box;
                        .name{

                        }
                        .time{

                        }
                    }
                }
            }
            .works-page{
                text-align: right;
            }
        }
        .dialog-footer{
            .dialogBtn{
                width: 180px;
                height: 40px;
            }
            .submit{
                background-color: #F58523;
                border: #F58523;
                margin-left: 20px;
            }
        }
    }
</style>