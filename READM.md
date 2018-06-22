<center>PL 연구실 웹 프로젝트</center>
===

## **설치**
1. 의존 라이브러리 설치
```
//설치된 루트폴더에서
npm install
npm install -g nodemon
```
2. mysql 설치하기
3. 루트 폴더 안의 QUERY 파일을 참고해서 테이블 만들기(일단은 샘플)
4. 루트 폴더의 setting.sample.json 을 참고해서 동일한 위치에 자신의 환경에 맞는 setting.json 파일 만들기
```
// 예시) setting.json
 {
   "database":{
      "host" : "localhost",
      "user" : "yongjun",
      "password" : "0000",
      "database" : "pl_lab"
  }
}
```
5. 실행해봅시다.
```
// 루트디렉터리에서
npm start
```

___

## 코딩 스타일

서로 가독성을 위해 최대한 코딩 규칙을 지켜 깔끔하게 코드 짭시다.
링크 참조해서 보시길!
[airbnb js 스타일 가이드](https://github.com/tipjs/javascript-style-guide#%ED%98%95types)

___

## 커밋
commit 메세지는 대충 적지 말고 뭘 했는지 알 수 있게, pull request도 되도록 간단한 내용은 보내서 날려주세요.
___

### ps

프론트 하시는 분들은 대부분 views 폴더와 public 폴더를 사용 하실겁니다.
템플릿 엔진은 ejs이고, 각자 파트너와 함께 잘 상의해서 폴더를 명확히 분류한 이후에 작업해주세요.(파일 이름도 알기 쉽게 해주세요.)
___