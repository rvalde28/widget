<template>

        <div class="course">
            <div class="wrapper">
                <div :id="'check'+index"class="outer-check">

                    <div class="check-text"><div class="inner-check">&#10004;</div></div>
                </div>

                <img src="../../src/assets/pic.jpg"/>
                <div :id="'icon' + index" class="bar"></div>
            </div>
            <div class="course-contents">
                <div class="content-wrapper">
                    <h1>{{title}}</h1>
                    <p>Progress {{completion}} %</p>
                </div>
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
            displayCompleted(container){

                var display = '#check'+ container.substr((container.length - (container.length-5)));


                $(display).css({
                    'display':'block'
                })
            },
            progressBar(){
                var ProgressBar = require('progressbar.js');
                //console.log(this.completion * 0.01);


                var progress = this.completion * 0.01;


                var i;


                var icon = "#icon" + this.index;

                var one = new ProgressBar.Circle(icon, {
                    strokeWidth: 5,
                    color: 'rgb(222, 46, 7)',
                    duration: 1000,
                    easing: 'easeInOut',

                });

                if(progress == 1) {

                    this.displayCompleted(icon);
                }



                one.animate(progress);
            }
        },
        mounted(){
            this.progressBar();
        }


    }


</script>