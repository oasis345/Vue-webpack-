import Vue from "vue"
// import NumberBaseball from "./NumberBaseball.vue" //웹팩에 resolve를 설정해 .vue까지 적을 필요 x
import NumberBaseball from "./NumberBaseball"
new Vue(NumberBaseball).$mount("#root") // new Vue()안에 넣어줌으로 새롭게 빌드됨 넣지 않을시 기존파일만 계속 맴돔
