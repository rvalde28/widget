import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


$('.main-button').click(function(){
    console.log('pressed')
    $(this).addClass('button-active');
    $('.left-button').removeClass('button-active');
    $('.right-button').removeClass('button-active');

});

$('.left-button').click(function(){
    console.log('pressed')
    $(this).addClass('button-active');
    $('.main-button').removeClass('button-active');
    $('.right-button').removeClass('button-active');

});

$('.right-button').click(function(){
    console.log('pressed')
    $(this).addClass('button-active');
    $('.left-button').removeClass('button-active');
    $('.main-button').removeClass('button-active');

});