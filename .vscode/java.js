fetch('bee.json')
  .then((data) => data.json())
  .then((obj) => {
    console.log(obj);
  });
