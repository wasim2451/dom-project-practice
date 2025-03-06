function greyclickHandler() {
  const element = document.getElementById('grey');
  const id_name = element.id;
  console.log(id_name);
  document.querySelector('canvas').style.background = 'grey';
}
