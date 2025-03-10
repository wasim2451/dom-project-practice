//Background should change every second
function colorChanger() {
    const r = Math.floor(Math.random() * 255) + 1;
    // console.log(r);
    const g = Math.floor(Math.random() * 255) + 1;
    // console.log(g);
    const b = Math.floor(Math.random() * 255) + 1;
    // console.log(b);
    document.querySelector('body').style = `
    background-color:rgb(${r},${g},${b})
    `;
  }
  
  let timer = null;
  //select the start button
  const start = document.getElementById('start');
  start.addEventListener('click', (e) => {
    if (timer == null) {
      colorChanger();
      timer = setInterval(colorChanger, 1000);
    }
  });
  //select the stop button
  const stop = document.getElementById('stop');
  stop.addEventListener('click', (e) => {
    clearInterval(timer);
    timer = null;
  });
  