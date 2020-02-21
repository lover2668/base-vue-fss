<template>
    <div>
        <template v-if="search">
            <!--<el-select v-model="value"  multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
                <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>-->
            <el-select filterable v-if="!checkFlg" clearable  v-model="value" placeholder="请选择" @change="change">
                <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>
            <el-select filterable v-else v-model="value" clearable  multiple placeholder="请选择" @change="change">
                <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>
        </template>
        <template v-else>
            <el-select v-if="!checkFlg" clearable  v-model="value" placeholder="请选择" @change="change">
                <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>
            <el-select v-else v-model="value" clearable  multiple placeholder="请选择" @change="change">
                <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'custom_etselect',
        props: ["selOptions","enableValue","isCheck","isChange","isSearch"],
        data(){
            return {
                options: this.selOptions,
                value: this.enableValue,
                checkFlg: !!this.isCheck ? this.isCheck : false,
                change: this.isChange,
                search: !!this.isSearch ? this.isSearch : false
            }
        },
        created() {
            //console.log(this.hasOwnProperty("isCheck"));
        }/*,
        mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options = [];
                }
            }
        }*/
    }
</script>

<style scoped>

</style>