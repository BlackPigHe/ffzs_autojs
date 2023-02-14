<template>
    <div class="index">

        <div class="topst"> 功能使用 </div>
        <div style="height:45px;"></div>
        <div style="height:10px;background:#F9FAFB;"></div>
        <div style="height:15px;"></div>
        <div class="nei">
            <div class="toperge">
                <div class="left" @click="navta('false')">
                    <div class="left-aut">
                        <img class="jticon" src="../assets/img/sp.png" alt="">
                        <div style="width:8px;">
                        </div>
                        <div class="title">
                            视频阅读
                        </div>
                    </div>
                    <img v-if="navtap == 'false'" class="leftimgxz" src="../assets/img/xuanjiao.png" alt="">
                </div>
                <div style="width:4%;">
                </div>
                <div class="left" @click="navta('false')">
                    <div class="left-aut">
                        <img class="jticon" src="../assets/img/wz.png" alt="">
                        <div style="width:8px;">
                        </div>
                        <div class="title">
                            文章阅读
                        </div>
                    </div>
                    <img v-if="navtap == 'false'" class="leftimgxz" src="../assets/img/xuanjiao.png" alt="">
                </div>
            </div>
            <div style="height:30px;"></div>
            <div class="itemdt">
                起始位置 ~ 终止位置：

                <div class="uni-input" style="width:45px;" @click="show = true">
                    <input style="width:100%;" v-model="dataset.startIndex" type="number" placeholder="数量" maxlength="2">

                </div>

                <div style="text-align: center; width:50px; ">
                    至
                </div>
                <div class="uni-input" style="width:45px;" @click="shows = true">
                    <input style="width:100%;" v-model="dataset.endIndex" type="number" placeholder="数量" maxlength="2">
                </div>

            </div>
            <div style="height:20px;"></div>
            <div class="itemdt">
                视频阅读数量：
                <div class="uni-input" style="width:40px;">

                    
                    <input style="width:100%;"  v-model="dataset.videoNum"  type="number" placeholder="数量"
                        maxlength="4">
                </div>
                <div style="width:10px;"> </div>
                文章阅读数量：
                <div class="uni-input" style="width:40px;">
                    <input style="width:100%;" v-model="dataset.txtTotalNum" type="number" placeholder="数量"
                        maxlength="4">
                </div>
            </div>
        </div>
        <div style="height:20px;"></div>
        <div class="top"></div>
        <div class="itemdt" style="margin-top:15px;">
            <div class="lef">
                <div class="lefttis" v-for="(item, index) in list" @click="liscick(item.id)">
                    <div style="width:20px;">
                    </div>
                    <img style="width:44px;" src="../assets/img/tx.png" alt="">
                    <div class="xjdk">
                        {{ item.appName }}
                    </div>
                    <img style="width:15px;" v-if="id == item.id" src="../assets/img/xuanzhong.png" alt="">
                    <img style="width:15px;" v-else src="../assets/img/wei.png" alt="">
                </div>
            </div>
            <div class="lef">
                <div class="lefttis">
                    <div style="width:20px;"></div>
                    <div class="xjdk">
                        彩虹盒子
                    </div>
                    <img style="width:15px;" src="../assets/img/xuanzhong.png" alt="">
                </div>
                <div class="lefttis">
                    <div style="width:20px;"></div>
                    <div class="xjdk">
                        观看赞友
                    </div>
                    <img style="width:15px;" src="../assets/img/xuanzhong.png" alt="">
                </div>
                <div class="lefttis" style="justify-content: center;width: 100%;">
                    <div class="xjdk" style="display: flex; align-items: center;">
                        <div style="padding: 0 10px;">
                            复刷
                        </div>
                        <div class="uni-input" style="width:45px;">
                            <input type="number" v-model="dataset.repetitionNum" placeholder="次数" maxlength="4">
                        </div>
                    </div>
                    <img style="width:15px;" src="../assets/img/xuanzhong.png" alt="">
                </div>
                <div class="lefttis">
                    <div style="width:20px;"></div>
                    <div class="xjdk">
                        清除后台
                    </div>


                    <img style="width:15px;" v-if="dataset.clearBackground == 1" @click="qlht(0)"
                        src="../assets/img/xuanzhong.png" alt="">

                    <img style="width:15px;" v-else src="../assets/img/wei.png" @click="qlht(1)" alt="">





                </div>
                <div class="lefttis">
                    <div style="width:20px;"></div>
                    <div class="xjdk">
                        智能判定
                    </div>

                    <img style="width:15px;" v-if="dataset.intellectualizedJudge == 1" @click="zhinengpanding(0)"
                        src="../assets/img/xuanzhong.png" alt="">

                    <img style="width:15px;" v-else src="../assets/img/wei.png" @click="zhinengpanding(1)" alt="">


                </div>
            </div>
        </div>


        <div style="height:20px;"></div>
        <div class="top"></div>
        <div class="nei">
            <div class="itamt">
                <img style="width:15px;" src="../assets/img/wei.png" alt="">
                <div class="dingshi">
                    定时(时/分)
                </div>
                <div style="width:7px;"> </div>
                <div class="uni-input" style="width:40px;">
                    <input type="number"  v-model="dataset.cron"    placeholder="时间" maxlength="3">
                </div>
                <div style="width:7px;"> </div>
                <!-- <div class="uni-input" style="width:40px;">
                    <input type="number" placeholder="分" maxlength="3">
                </div> -->
                <div style="width:15px;"> </div>
                <div id="autojs_run" class="antl" @click="zhixing()">
                    执行
                </div>
            </div>
            <div class="itamt">
                <div class="botleft">
                    阅读等待时间：
                </div>
                <div class="botright">
       
                    <div class="uni-input" style="width:60px;">
                        <input type="number"  v-model="dataset.txtWaitTime"    placeholder="时" maxlength="3">
                    </div>
                    <div style="width:15px;"> </div>
                    <div class="antl" @click="yuedumingxi()">
                        阅读明细
                    </div>
                </div>
            </div>
            <div class="itamt">
                <div class="botleft">
                    视频关闭次数：
                </div>
                <div class="botright">
                    <div class="uni-input" style="width:60px;">
                        <input type="number"  v-model="dataset.videoCloseNum"  placeholder="次数" maxlength="3">
                    </div>
                    <div style="width:15px;"> </div>
                    <div class="antl" @click="huanyuanpeizhi()">
                        还原配置
                    </div>
                </div>
            </div>
            <div class="itamt">
                <div class="botleft">
                    连续等待次数：
                </div>
                <div class="botright">
                    <div class="uni-input" style="width:60px;">



                        <input type="number" v-model="dataset.continuousWaitNum" placeholder="次数" maxlength="4">
                    </div>
                    <div style="width:15px;"> </div>
                    <div class="antl" @click="jianrongpeizhi()">
                        兼容配置
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 100px;"></div>
        <navbar style="border:2px solid #000;" :active="active"></navbar>
    </div>
</template>



<script>

import { Toast } from 'vant'
import { multiple, script, defaults,scriptst } from '../api/home'
import navbar from '../components/tabber.vue'

export default {
    components: { navbar },
    name: 'index',
    data() {
        return {

            list: [],

            dataset: {

                continuousWaitNum:'',

                // 是否清理后台
                clearBackground: 0,
                // 连续等待次数
                continuousWaitNum: '',
                // 开启智能
                intellectualizedJudge: 0,

                // 复刷次数
                repetitionNum: '',

                // 文章阅读数
                txtTotalNum: '',

                // 阅读等待次数
                txtWaitTime:'',


            },

            id: '',

            active: '/index',


            // active: 'search',


            show: false,
            shows: false,


            currentTime: '12:00',

            currentTimes: '12:00',


            navtap: 'false',

            starttime: '',
            endtime: ''


        }
    },

    // 


    created() {

        this.cx()

    },

    methods: {



        // 智能判定
        zhinengpanding: function (e) {
            this.dataset.intellectualizedJudge = e

        },



        // 清理后台
        qlht: function (e) {

           
            this.dataset.clearBackground = e


        },



        //         appId	integer($int64)
        // 这个是适配的脚本的 app 的id 不能为空

        // clearBackground	integer($int32)
        // 是否清理后台，默认清理后台 0 不清理 1 清理

        // continuousWaitNum	integer($int32)
        // 连续等待次数 , 不能为空

        // cron	string
        // 定时时间表达式 例如： 0,0,0,0,0,0 已逗号分隔的6个时间段分别为 年月日时分秒

        // endDateLong	integer($int64)
        // 结束时间 使用时间戳

        // intellectualizedJudge	integer($int32)
        // 是否开启智能刷视频，默认不开启 0 不开启 1 开启

        // multipleAppIds	[
        // 适配的多开appId列表

        // integer($int32)]
        // repetitionNum	integer($int32)
        // 复刷次数，默认为0

        // startDateLong	integer($int64)
        // 开始时间 使用时间戳

        // txtTotalNum	integer($int64)
        // 文章阅读数 不能为空

        // txtWaitTime	integer($int64)
        // 阅读的等待时间 不能为空

        // videoCloseNum	integer($int32)
        // 视频的关闭次数，不能为空

        // videoNum	integer($int64)
        // 看广告的总数 不能为空






        //         1. /app/multiple 是获取过来 显示的位置是 《星级多开 》这个位置，是个array
        // 2. get /config/script 获取用户自己的配置，然后把值填入所有的输入框和勾选框
        // 3. post /config/script 是用户更新自己的配置数据
        // 4. /config/script/default 这个是获取默认配置，不是有一个按钮「还原配置」用在这里。



        liscick: function (e) {
            console.log(e)
            this.id = e

            this.cxscript(e)

        },




        cxscript: function (e) {

        

            var data = {
                userId: e
            }
         
            script(data).then(res => {
             
                console.log(res.data[0].scriptConfig, "666666")
                if (res.code == 0) {

                    this.dataset = res.data[0].scriptConfig
                }
            }).catch(error => {
                const _this = this
                if (error.code == 401) {
                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                } else if (error.code == 435) {

                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                }
                console.log(error, "errosr")
            })




        },





        // 查询App列表
        cx: function () {
            var data = {}
            multiple(data).then(res => {
             
                console.log(res.data, "666666")
                if (res.code == 0) {

                    this.list = res.data
                }
            }).catch(error => {
                const _this = this
                if (error.code == 401) {
                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                } else if (error.code == 435) {

                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                }
                console.log(error, "errosr")
            })


        },


        Jumppage: function (e) {
            this.$router.push({
                path: e
            })
        },



        // 阅读明细
        yuedumingxi: function () {

            this.Jumppage('/details')


            // uni.navigateTo({
            //     url: '/pages/details/details'
            // })

        },

        // 还原配置
        huanyuanpeizhi: function () {
            var data = {
            }

            defaults(data).then(res => {

                console.log(res.data, "666666")
                if (res.code == 0) {

                    // this.dataset = res.data
                }
            }).catch(error => {
                const _this = this
                if (error.code == 401) {
                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                } else if (error.code == 435) {

                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                }
                console.log(error, "errosr")
            })



        },

        // 兼容配置
        jianrongpeizhi: function () {




        },


        // 执行
        zhixing: function () {

            // 执行



            var data = {
                // userId: e
            }
         
            scriptst(data).then(res => {
             
                console.log(res.data[0].scriptConfig, "666666")
                if (res.code == 0) {

                    this.dataset = res.data[0].scriptConfig
                }
            }).catch(error => {
                const _this = this
                if (error.code == 401) {
                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                } else if (error.code == 435) {

                    setTimeout(function () {
                        _this.$router.replace("/");
                        // console.log('一秒钟后跳转页面')
                    }, 1000); //延迟1000毫米
                    return
                }
                console.log(error, "errosr")
            })

            


        },





        navta: function (e) {

            this.navtap = e

        },







    }


}




</script>


<style lang="less" scoped >
.topst {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    color: #000;
    position: fixed;
    top: 0;
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    background: #FFFFFF;
    z-index: 999;
}




.iconti {
    width: 24px;
    height: 24px;
}

input {
    width: 100%;
    outline: none;
    border: none;
    background: none;
    font-size: 16px;



}


.top {

    background: #F9FAFB;
}

.nei {
    width: 95%;
    margin: 0 auto;
    // border: 2px solid red;
}

.jticon {
    width: 27px;
}

.left {
    width: 48%;
    background: rgba(255, 255, 255, 0.39);
    box-shadow: 0px 0px 6px rgba(58, 58, 58, 0.1);
    margin: 0 auto;
    border-radius: 7px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;



}


.toperge {
    display: flex;

}

.left-aut {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
}

.leftimgxz {

    width: 40px;
    position: absolute;
    bottom: 0;
    right: 0;


}


.title {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    color: #2B2B2B;

}

.itemdt {
    display: flex;
    // align-items: center;
}

.uni-input {

    text-align: center;
    background: #EFF4F9;
    // background: rgba(239, 244, 249, 0.39);
    padding: 8px 15px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    color: #9CA4B5;
}




.lef {
    width: 50%;

}

.lefttist {
    width: 100%;
    margin-top: 15px;


}

.lefttis {
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;


}


.leftti {
    width: 50%;
    // border: 2px solid red;
    display: flex;
    align-items: center;

}

.xjdk {


    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    color: #333333;

    padding: 5px 10px;

}

.itamt {
    height: 71px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    color: #333333;
    display: flex;
    align-items: center;

    border-bottom: 1px solid #E4E8EF;

}

.dingshi {
    padding: 0 10px;
}


.antl {

    background: #4D82FF;
    width: 75px;

    text-align: center;
    padding: 7px 10px;
    border-radius: 7px;

    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    margin-left: auto;
    color: #FFFFFF;



}

.botleft {
    width: 40%;


}


.botright {
    width: 60%;


    display: flex;
    align-items: center;

    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    color: #333333;

}
</style>
