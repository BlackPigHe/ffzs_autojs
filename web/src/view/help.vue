<template>
    <div class="help">

        <div class="topst"> 使用帮助 </div>
        <div style="height:45px;"></div>
        <div style="height:10px;background:#F9FAFB;"></div>
        <div style="height:15px;"></div>






        <!-- <div class="top"></div> -->

        <div class="box" v-for="(item, index) in list">
            <div style="width:17%;display: flex;">


                <img class="icon" src="../assets/img/1.png" alt="">


                <div class="dian"></div>
            </div>

            <div style="width:80%;">
                <div class="title">
                    {{ item.title }}
                </div>

                <div style="height:5px;">

                </div>

                <div class="contenttext">
                    {{ item.message }}
                </div>

            </div>

        </div>


        <div style="height:100px;"></div>
        <navbar :active="active"></navbar>

    </div>
</template>



<script>

import { Toast } from 'vant'
import { use_help } from '../api/home'

import navbar from '../components/tabber.vue'

export default {
    components: { navbar },
    name: 'help',
    data() {
        return {
            list: [],
            active: '/help',

        }
    },


    created() {

        this.cx()

    },

    methods: {

        Jumppage: function (e) {
            this.$router.push({
                path: e
            })
        },





        cx: function () {
            var data = {}
            use_help(data).then(res => {


                if (res.code == 200) {

                    this.list = res.data.rows
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





    }


}




</script>


<style lang="less" scoped>
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


.top {
    height: 10px;
    background: #F9FAFB;
}

.box {
    width: 95%;
    height: 85px;
    margin: 0 auto;
    border-bottom: 1px solid #DFE3E8;
    display: flex;
    align-items: center;

    .dian {
        width: 10px;
        height: 10px;
        background: red;
        border-radius: 50%;
        margin-left: -15px;
        z-index: 999;
    }


    .icon {
        width: 54px;
        height: 54px;
        border-radius: 50%;

    }

    .title {
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 21px;
        color: #333333;

        // border: 2px solid red;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .contenttext {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 16px;
        color: #9CA4B5;

        overflow: hidden; //多出的隐藏
        text-overflow: ellipsis; //多出部分用...代替
        display: -webkit-box; //定义为盒子模型显示
        -webkit-line-clamp: 2; //用来限制在一个块元素显示的文本的行数
        -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）


    }

}
</style>