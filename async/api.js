//https://jsonplaceholder.typicode.com/
//사용하고자 하는 API주소를 fetch안에 넣어준다.

const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
