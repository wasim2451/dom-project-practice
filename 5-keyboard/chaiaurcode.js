console.log('Project 5');
console.log('Project 5');
//In Window object add Keydown event listener
window.addEventListener('keydown', (e) => {
    //select id
    const insert = document.getElementById('insert');
    insert.innerHTML = `
    <div class='color'> 
    <table>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <th>${e.key == ' ' ? 'Space' : e.key}</th>
    <th>${e.keyCode}</th>
    <th>${e.code}</th>
    </tr>
    </table>
    </div>
  `;
});
