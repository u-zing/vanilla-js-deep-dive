const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resoleve("3초가 지났습니다.");
    }, ms);
  });
};

//const start = async () => {
//  try {
//    let result = await delay(3000);
//    console.log(result);
//  } catch (error) {
//    console.log(error);
//  }
// };

//async
//비동기를 수행할 함수의 이름 오른쪽에 작성한다.
//async 키워드를 작성하면 해당함수는 항상 자동으로 프로미스 객체를 반환한다.

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};
const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};
const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((result) => console.log(result));
  } catch (err) {
    console.log(err);
  }
};

start();
