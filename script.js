var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    
  }
});


tl.to("#gzcola",{
    top:"110%",
    left: "-3%",
},'watermelon','watermelon2')

tl.to("#watermelon",{
    top:"122%",
    left:"10%",
},'watermelon','watermelon2')

tl.to("#watermelon2",{
    top:"150%",
    left:"0%",
},'watermelon','watermelon2')

tl.to("#leaf2",{
    top:"150%",
    left:"88%",
    transform:"rotate(20deg)"
},'watermelon','watermelon2','leaf2')

tl.to("#leaf3",{
    top:"110%",
    right:"90%",
    transform:"rotate(-90deg)"
},'watermelon','watermelon2','leaf2','leaf3')

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    
    
  }
});



tl2.from("#gzcola-orange",{
    top:"80%",
    rotate:"-90deg",
        
},'gzcola-sg')

tl2.from("#gzcola-sg",{
    top:"60%",
    rotate:"-90deg",
        
},'gzcola-sg')

tl2.from("#orange",{
    top:"60%",
    rotate:"-90deg",
        
},'gzcola-sg','orange')


tl2.to("#gzcola",{
    top:"205%",
    left:"33%"
        
},'gzcola-sg')