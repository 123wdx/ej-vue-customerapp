<template>
    <div class="address">
        <van-nav-bar
        title="地址列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState('app',['user']),
        ...mapState('address',['address'])
    },
    created(){
        this.findByCustomerId(this.user.id)
    },
    methods:{
        ...mapActions('address',["findByCustomerId"]),
        onClickLeft(){
            this.$router.push('/index/user')
        }
    }
}
</script>