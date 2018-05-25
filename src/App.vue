<template>
  <div id="app">
    <div class="window">
    <div id="non-classes">
        <div class="all-courses">
            <div class="main-button">

            </div>
        </div>

        <div id="coursesButton" class="button-size">
            <div class="left-button">

            </div>
            <div class="right-button">

            </div>
        </div>

        <div id="searchBar" class="search-bar">
            <input type="search" class="search" placeholder=" Search for a course">
        </div>
    </div>

    <div class="course-container">
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
        <div class="course">
            <img src="../src/assets/pic.jpg" class="rounded-icon">
            <div class="course-contents">
                <h1>Course Title</h1>
                <p>Course Contents</p>
            </div>
        </div>
    </div>


</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/css/style.css'
import './assets/js/checkers.js'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
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
