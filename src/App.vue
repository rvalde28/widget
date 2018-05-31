<template>
    <div id="app">
        <div class="window">
            <div id="non-classes">
                <div class="all-courses">
                    <div v-on:click="getAll()" class="main-button">
                        <span>All Courses</span>
                    </div>
                </div>

                <div id="coursesButton" class="button-size">
                    <div v-on:click="getEnrolled()" class="left-button button-active">
                        <span>Enrolled</span>
                    </div>
                    <div v-on:click="getCompleted()" class="right-button">
                        <span>Completed</span>
                    </div>
                </div>

                <div id="searchBar" class="search-bar">
                    <input type="text" class="search" v-model="search" placeholder=" Search for a course">
                </div>
            </div>

            <div class="course-gap">
                <div class="course-container">
                    <course v-for="(item,index) in courseLoader"
                            :key="item.id"
                            v-bind:title="item.name"
                            v-bind:completion="item.completion"
                            v-bind:index="index"></course>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import Course from './components/Course.vue'
import './assets/css/style.css'
import './assets/js/checkers.js'
import axios from 'axios'

export default {
  name: 'app',
    data(){
      return{
          json: null,
          enrolled : null,
          total: null,
          completed: [],
          courses: [],
          search: ''
      }
    },
  components: {
      Course
  },
    methods: {
        getHeight() {
            var height = $(window).height() - $('#non-classes').height()-20;


            $(".course-container").css({
                'height' : height
            });
        },
        getAll(){
            this.courses = this.total;
        },
        getEnrolled(){
            this.courses = this.enrolled;
        },
        getCompleted() {
            this.courses = this.completed;
        },
        searchCourse(){
            this.search = this.search.toLowerCase();
            this.search = this.search.replace(/\s/g,'');
            var temp = [];

            for(var i = 0; i < this.courses.length; i++){
                this.courses[i].toLowerCase();
                this.courses[i].replace(/\s/g,'');
                this.courses[i].replace(':','');

                if(this.courses[i].indexOf(this.search) != -1){
                    temp.push(this.courses[i]);
                }


            }

            console.log(temp);
        },

},
    created(){
      axios.get('http://localhost:8000/api/json')
          .then(response => {
              var one = response.data.enrolled;
              //console.log(one[1]);
              this.enrolled = response.data.enrolled;
              this.total = response.data.courses;


              this.completion = [];
              for(var i = 0; i < this.enrolled.length; i++){

                  if(this.enrolled[i].completion == 100){
                      this.completed.push(this.enrolled[i]);
                  }
              }
              this.courses = this.enrolled;

          });

    },
    mounted(){
        this.getHeight();
        //this.progressBar()
    },
    computed: {
        courseLoader() {
            var self = this;
            return this.courses.filter(function (c) {
                var searchTemp = self.search;
                searchTemp = searchTemp.replace(/\s/g,'');
                var tempCourse = c.name;
                tempCourse = tempCourse.replace(/\s/g,'');

                return tempCourse.toLowerCase().indexOf(searchTemp.toLowerCase()) >= 0;
            })
        }
    },

};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
