<template>
<div class="placeOrders">
    <!--左侧导航-->
    <van-nav-bar
    title="商品分类"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
    <van-sidebar v-model="activeKey">
    <van-sidebar-item v-for="itme in categories" :title=itme.name :key="itme.id" @click="zhanshiHandler(itme.id)" />
    </van-sidebar>
     <!--右侧导航-->
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
          activeKey:0
        }
    },
    computed:{
        ...mapState('category',["categories"]),
        ...mapState('product',["products"])
    },
    methods:{
        ...mapActions('product',["findProductsByCategoryId"]),
        onClickLeft(){
            this.$router.push('/index/home')
        },
        zhanshiHandler(categoriesId){
            this.findProductsByCategoryId(categoriesId)
        }
    }
}
</script>