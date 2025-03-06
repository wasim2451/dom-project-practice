function time() {
    const date = new Date();
    // console.log(date);
    const hours = date.getHours();
    // console.log(hours);
    const minutes = date.getMinutes();
    // console.log(minutes)
    const seconds = date.getSeconds();
    // console.log(seconds);
    const ampm = hours > 12 ? 'PM' : 'AM';
    //  console.log(ampm);
    const time = date.toLocaleTimeString();
    const clock = (document.getElementById('clock').textContent = `
    ${time}
    `);
  }
  
  setInterval(time, 1000);
  
  time();
  