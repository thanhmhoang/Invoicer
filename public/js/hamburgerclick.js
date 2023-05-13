


  const toggle = document.getElementById('toggle');
  const sidebar = document.getElementById('sidebar');
  function burgerclick(e){
    if(e.target.id !== 'sidebar' && 'toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
      }
  }

  document.onclick = burgerclick;

  toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
  }
