const VueLoaderPlugin = require("vue-loader/lib/plugin")
const path = require("path") //노드가 만들어둔 스크립트 경로 도우미라고  보면됨

//require는 노트 환경의 import라고 보면 된다.

// 아래 경로 설정할때 path.join(__dirname,"현재패스경로") 하면 자동으로 위치 잡아줌
// 하단의 모듈 rules안 할시 js파일만 웹펙이 인식 그래서 안에 뷰관련 설정 loader를 작성해야함
module.exports = {
  mode: "development", // 배포시 production 현재는 개발시 development
  devtool: "eval", // 배포시 hidden-source-map 개발시는 eval  //처리 속도가 빨라짐
  entry: {
    app: path.join(__dirname, "main.js"), // 사용자 파일 설정  앤트리의 app이라는 이름으로 하나의 파일로 합쳐진다. 아무이름으로 생성해도 괜찮음
  }, //자바스크립트와 css등을 합쳐준다
  resolve: {
    extensions: [".js", ".vue"], // main.js 같은거에 import할때 .vue까지 다 적을필요 없이 파일명만 적어도됨
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader", //use 혹은 loader 둘다 같음
      },
    ],
  },
  plugins: [new VueLoaderPlugin()], //플러그인 추가
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"), //폴더경로 합쳐진 app.js를 생성할 위치
  },
}

// 모듈들이 처리하다가 vue 파일을 만나면 플러그인이 처리하는
