function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기

getBanana()
  .then((banana) =>
    getApple()
      .then((apple) => [banana,apple])
  )
  .then(console.log);

  // Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
  Promise.all([getBanana(), getApple()]) 
  .then((fruits) => console.log('all', fruits));

  // Promise.race 주어진 Promise 중에 제일 빨리 수행된것이 이김! (제일 빨리 출력)
  Promise.race([getBanana(), getApple()]) // 제일 빠른거 출력
  .then((fruits) => console.log('race', fruits));

  Promise.all([getBanana(), getApple(),getOrange()]) // 성공 했을때 출력
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

  Promise.allSettled([getBanana(), getApple(),getOrange()]) // 모든 결과에 다 출력
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);