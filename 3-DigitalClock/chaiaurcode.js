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
  
    const clock = (document.getElementById('clock').textContent = `
    ${hours}:${minutes}:${seconds} ${ampm}
    `);
  }
  
  setInterval(time, 1000);
  
  time();
  