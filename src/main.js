import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


$('.main-button').click(function(){
    console.log('pressed')
    $('.main-button').css({
        'background-color':'rgb(222, 46, 7)',
        'color' : 'white'
    });
    $('.left-button').css({
        'background-color':'',
        'color' : ''
    });
    $('.right-button').css({
        'background-color':'',
        'color' : ''
    });

});

$('.left-button').click(function(){
    console.log('pressed')
    $('.left-button').css({
        'background-color':'rgb(222, 46, 7)',
        'color' : 'white'
    });
    $('.main-button').css({
        'background-color':'',
        'color' : ''
    });
    $('.right-button').css({
        'background-color':'',
        'color' : ''
    });

});

$('.right-button').click(function(){
    console.log('pressed')
    $('.right-button').css({
        'background-color':'rgb(222, 46, 7)',
        'color' : 'white'
    });
    $('.left-button').css({
        'background-color':'',
        'color' : ''
    });
    $('.main-button').css({
        'background-color':'',
        'color' : ''
    });

});