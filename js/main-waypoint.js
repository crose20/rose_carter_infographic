window.onload = function(){
    console.log("Hello world");



    // MAIN HEADER TEXT
    var waypoint = new Waypoint({
        element:document.getElementById("our-solar-system"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "5%" // 95% away from bottom of page when activatedd
    })
    var waypoint = new Waypoint({
        element:document.getElementById("our-solar-system-desc"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "10%" // 90% away from bottom of page when activatedd
    })
    var waypoint = new Waypoint({
        element:document.getElementById("our-solar-system-discover"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "12%" // 88% away from bottom of page when activatedd
    })

    // VERTICLE SIDE TIMELINE
    var waypoint = new Waypoint({
        element:document.getElementById("timeline-verticle-line"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "5%" // 95% away from bottom of page when activated
    })


    // SUN
    var waypoint = new Waypoint({
        element:document.getElementById("sun-desc"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "30%" // 70% away from bottom of page when activated
    })


    // MERCURY
    var waypoint = new Waypoint({
        element:document.getElementById("mercury-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("mercury-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "85%" // 15% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("mercury-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "70%" // 30% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("mercury-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "70%" // 30% away from bottom of page when activated
    })
    // END OF MERCURY ANIMATIONS 





    // VENUS
    var waypoint = new Waypoint({
        element:document.getElementById("venus-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("venus-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("venus-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "70%" // 30% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("venus-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%" // 20% away from bottom of page when activated
    })
    // END OF VENUS ANIMATIONS
    




    // EARTH
    var waypoint = new Waypoint({
        element:document.getElementById("earth-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("earth-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("earth-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "70%" // 30% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("earth-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%" // 20% away from bottom of page when activated
    })
    // END OF EARTH ANIMATIONS





    // MARS
    var waypoint = new Waypoint({
        element:document.getElementById("mars-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("mars-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("mars-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" // 50% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("mars-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%" // 20% away from bottom of page when activated
    })
    // END OF MARS ANIMATIONS





     // JUPITER
     var waypoint = new Waypoint({
        element:document.getElementById("jupiter-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("jupiter-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "40%" // 60% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("jupiter-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" // 50% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("jupiter-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%" // 20% away from bottom of page when activated
    })
    // END OF JUPITER ANIMATIONS





    // SATURN
    var waypoint = new Waypoint({
        element:document.getElementById("saturn-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("saturn-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "40%" // 60% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("saturn-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" // 50% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("saturn-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%" // 20% away from bottom of page when activated
    })
    // END OF SATURN ANIMATIONS





    // URANUS
    var waypoint = new Waypoint({
        element:document.getElementById("uranus-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("uranus-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "40%" // 60% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("uranus-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" // 50% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("uranus-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%" // 20% away from bottom of page when activated
    })
    // END OF URANUS ANIMATIONS





    // NEPTUNE
    var waypoint = new Waypoint({
        element:document.getElementById("neptune-timeline"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" // 10% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("neptune-planet"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "70%" // 30% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("neptune-desc"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "70%" // 30% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("neptune-did-you-know"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    // END OF NEPTUNE ANIMATIONS





    // STARS
    var waypoint = new Waypoint({
        element:document.getElementById("star-1"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-2"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-3"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-4"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-5"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-6"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-7"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-8"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-9"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-10"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-11"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-12"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-13"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-14"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-15"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-16"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-17"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-18"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-19"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-20"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-21"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-22"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-23"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-24"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-25"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-26"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-27"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-28"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-29"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-30"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-31"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-32"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-33"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-34"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-35"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-36"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-37"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-38"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-39"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-40"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-41"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-42"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-43"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-44"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-45"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-46"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-47"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    var waypoint = new Waypoint({
        element:document.getElementById("star-48"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "95%" // 5% away from bottom of page when activated
    })
    // END OF STARS ANIMATIONS


  };