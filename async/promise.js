//promise를 사용하는 이유는 비동기의 문제점인 콜백지옥을 해결하기 위해서다.

const excutor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};

const promise = new Promise(excutor);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 5000);
};
const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 3000);
};
const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000);
};

//콜백지옥↓: 코드가 복잡해지고 가독성이 떨어진다.
workA(10, (resA) => {
  console.log(`workA : ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB : ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC : ${resC}`);
    });
  });
});

const workD = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};
const workE = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};
const workF = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

workA(10).then((resD) => {
  console.log(`workD : ${resD}`);
  workB(resD).then((resE) => {
    console.log(`workE : ${resE}`);
    workC(resE).then((resF) => {
      console.log(`workF : ${resF}`);
    });
  });
});
//프로미스 객체를 반환해 then 메서드를 연속으로 사용하는 방식을 프로미스 체이닝(Promise Chaining)

//then과 catch 문법을 사용해서 에러처리
