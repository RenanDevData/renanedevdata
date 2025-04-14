const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('moveSkills')
            entry.target.classList.add('visivel')
        }else{
            entry.target.classList.remove('moveSkills');
            entry.target.classList.remove('visivel');
        }
    })
}
  );

const elementos = document.querySelectorAll('.observer')
elementos.forEach(el => {
    observer.observe(el)
})

