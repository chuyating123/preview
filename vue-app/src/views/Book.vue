<template>
    <div>
   <comment-book :imgs="imgs"></comment-book>
    </div>
</template>

<script>
import CommentBook from '../components/CommentBook'
    export default {
         data(){
            return{
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ]
            }
        },
        components:{
            CommentBook
        }
    }
</script>

<style lang="scss" scoped>

</style>