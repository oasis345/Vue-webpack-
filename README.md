"# Vue-webpack-"
뷰에서 웹팩사용법

1. node.js 설치

2. npm init // 버전 등이 적혀있음

3. npm i vue // vue설치

4. npm i webpack webpack-cli -D //dev모드로 웹펙설치

5. webpack.config.js 파일 생성

6.config안의 내용을 채우고

7. 사용할 vue , html ,main.js 파일을 만들어 채우고

8. 패키지.json 의 test를 build 와 webpack으로 바꿔준다

9. npm i vue-loader -D 설치 //웹팩 뷰파일까지 번들링해주는 로더

10. 컨피그 파일에 const VueLoaderPlugin = require("vue-loader/lib/plugin") 추가

11. npm i vue-template-compiler -D 설치 //중요사항 패키지.json에 vue와 compiler의 버전이 일치해야함 반드시 안 그러면 바로 오류 버전 맞추는법 ex) npm i vue@2.7.0 @안 쓸경우 항상 최신버전
