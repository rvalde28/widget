<template>

        <div class="course">
            <div class="wrapper">
                <img src="../../src/assets/pic.jpg"/>
                <div :id="'icon' + index" class="bar"></div>
            </div>
            <div class="course-contents">
                <h1>{{title}}</h1>
                <p>Course Contents</p>
            </div>
        </div>


</template>

<script>
    import './../assets/css/style.css'
    import './../assets/js/javascript.js'

    export default {
        name: "Course",
        props:['title','completion','index'],

        data(){
            return{

            };
        },

        methods:{
            progressBar(){
                var ProgressBar = require('progressbar.js');
                //console.log(this.completion * 0.01);


                var progress = this.completion * 0.01;



                console.log("called");

                var i;


                var icon = "#icon" + this.index;

                var one = new ProgressBar.Circle(icon, {
                    strokeWidth: 3,
                    color: 'rgb(222, 46, 7)',
                    duration: 1000,
                    easing: 'easeInOut',

                });

                one.animate(progress);
            }
        },
        mounted(){
            this.progressBar();
        }


    }


</script>