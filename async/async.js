// 동기 : 순서대로 바로 실행됨
const workA = () => {
  console.log("workA");
};
const workB = () => {
  console.log("workB");
};

//웹페이지가 동기로 작동된다면, 웹페이지의 이미지가 나타나기 전까지 다른 텍스트는 나타나지 않을것이다.
//비동기처리로 작동이 된다면, 이미지보다 시간이 짧은 텍스트가 나타나고 이미지가 나타날것

//비동기 내장함수 setTimeout(()=>{},)

// 비동기 처리 함수 setTimeout 사용 예시
const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 3000); // 3초 후 실행
};
const workD = () => {
  setTimeout(() => {
    console.log("workD");
  }, 5000); // 5초 후 실행
};
const workE = () => {
  setTimeout(() => {
    console.log("workE");
  }, 1000); // 1초 후 실행
};

// 함수 실행 순서
workA(); // 동기 함수 → 바로 출력
workC(); // 비동기 함수 → 3초 후 출력
workD(); // 비동기 함수 → 5초 후 출력
workE(); // 비동기 함수 → 1초 후 출력

// 예상 출력 순서
// workA  (즉시 출력)
// workE  (1초 후 출력)
// workC  (3초 후 출력)
// workD  (5초 후 출력)
