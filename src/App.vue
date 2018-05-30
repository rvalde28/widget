<template>
    <div id="app">
        <div class="window">
            <div id="non-classes">
                <div class="all-courses">
                    <div class="main-button">
                        All Courses
                    </div>
                </div>

                <div id="coursesButton" class="button-size">
                    <div class="left-button">
                        Enrolled
                    </div>
                    <div class="right-button">
                        Completed
                    </div>
                </div>

                <div id="searchBar" class="search-bar">
                    <input type="search" class="search" placeholder=" Search for a course">
                </div>
            </div>

            <div class="course-container">


                <course v-for="(item,index) in enrolled"
                        :key="item.id"
                        v-bind:title="item.name"
                        v-bind:completion="item.completion"
                        v-bind:index="index"></course>
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
          total: null
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
        }

},
    created(){
      axios.get('http://localhost:8000/api/json')
          .then(response => {
              var one = response.data.enrolled;
              //console.log(one[1]);
              this.enrolled = response.data.enrolled;
              this.total = response.data.courses;
          });

    },
    mounted(){
        this.getHeight();
        //this.progressBar()
    }

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
