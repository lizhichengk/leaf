<template>
    <li :style = style>
        <span>{{leftText}}</span>
        <span>{{rightText}}</span>
    </li>
</template>
<script>
const defaultStyle = {
    height:"45px",
    lineHeight:"45px",
    listStyle:"none",
    fontSize:"14px",
    clear:"both"
}
export default {
    props:{
        leftText:{
            type:String,
            default:'左侧text'
        },
        rightText:{
            type:String,
            default:'右侧text'
        }
    },
    data(){
        return {
            style:{
                ...defaultStyle
            }
        }
    }    
}
</script>
<style scoped>
    li span:nth-of-type(1){
        float: left;
    }
    li span:nth-of-type(2){
        float: right;
    }
</style>


