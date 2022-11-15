export const PageAnimation = {
    hidden:{
        opacity:0,
        y:300,
    },
    show:{
        opacity:1,
        y: 0,
        transition:{duration:1},
        when: 'beforChildren'
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:1
        }
    }
}
export const Fade ={
    hidden:{
        opacity:0,

    },
    show:{
        
    }

}
