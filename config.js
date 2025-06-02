var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: "pk.eyJ1IjoidGhlZGFpbHluZXh1cyIsImEiOiJjbWFscG9haTYwYzM1MmtxMHVzcDJ5cXdzIn0.fuLEEx3-GMa6ZQvECMqEwg",
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: "assets/DN_header.png",
    subtitle: " ",
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {id: 'intro',
            alignment: 'fully',
            hidden: false,
            title: 'Best Of 2025',
            description: 'Every year the Daily Nexus compiles a list of categories that make Isla Vista, Isla Vista. We then share those places and things with the UC Santa Barbara community so we can elect a winner for each category. The winners were chosen by the community and the content is written by the editorial staff. Our aim is to celebrate the places on and off campus that make this place so hard to say goodbye to as we graduate and leave for the summer.<br><i>Photography by Wesley Haver and illustration by Kaylee Heartman and Michelle Wu.<\i>',
            location: {
                center: [-119.86306, 34.41434],
                zoom: 14.35,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{id: 'sams',
            byline: 'By Kendra Martinez',
            alignment: 'left',
            hidden: false,
            title: "Best Sandwich: Sam's To Go",
            image: './assets/sams.jpg',
            description: 'Sam’s To Go is a staple for a reason, and every UC Santa Barbara student should try the No. 1 sandwich spot in I.V. at least once.',
            location: {
                center: [-119.8567, 34.41326],
                zoom: 21,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            more: 'Few things in this world make me as happy as a delicious, juicy Italian sandwich. Full of so many rich flavors and tangy, golden pepperoncini, it is by far one of the superior sandos out there. Thankfully, one does not have to travel far for a grade-A Italian sub in Isla Vista. <br><br>My first time in Sam’s To Go was this year. Before, it was always that mysterious shop sandwiched between KOZY Coffee and Blenders In The Grass, two places I frequent often. It never occurred to me to step inside.<br><br>I would see the crowds of drunken students waiting for their sandwiches every Saturday and Sunday like clockwork. Clearly, there was something about it that made the daygers of I.V. go crazy. Still, that wasn’t enough to draw me in. <br><br>It wasn’t until I met a pal (now one of my closest friends), who just happened to work there, that I finally decided to give this I.V. staple a try and see what all the hype was about.<br><br>Now, for people who enjoy customizing their food, there are plenty of options to choose from. But, for those who are more like me and enjoy the simplicity of just ordering an item off the menu, there are many delicious creations. <br><br>Because I am very particular about my Italian sandwiches, I didn’t immediately go for it. The first Sam’s To Go sandwich I tried was a basic Cali Club & Cheese on Dutch Crunch — the superior choice of bread, no matter the sandwich. It was good, but nothing to write home about. <br><br>Once I decided to give the Italian sandwich a try, my opinion on Sam’s To Go changed immediately. It was so yummy and lived up to my expectations — not enough to be my favorite Italian sandwich, but definitely a close second. Now, I only have to travel a few blocks if I am ever craving a delicious sandwich here at school. <br><br>Sam’s To Go is a staple for a reason, and every UC Santa Barbara student should try the No. 1 sandwich spot in I.V. at least once.',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            drawing: "./assets/sams_doodle.png",
            onChapterEnter: [],
            onChapterExit: []
        }, {id: 'devs',
            alignment: 'right',
            hidden: false,
            title: "Best First Date Spot: Devereux Beach",
            byline: "By Lance Sanchez",
            image: './assets/devs.jpg',
            more: "The first date. An event so critical, yet so ambiguous, to a budding relationship. Plan it correctly, and you’ve just secured yourself a romantic partner. Mess it up, and you’ve fumbled that special someone — so close, yet so far. <br><br>So what’s the plan? You want somewhere unforgettable, romantic and just the right kind of magical, someplace like a beach. Luckily, at UC Santa Barbara, you're surrounded by some of the most beautiful beaches in California. A sunset date sounds like a dream — golden skies melting into the ocean, the soft sound of waves in the background — but with so many beaches near Isla Vista, how do you choose the perfect one?<br><br>Thankfully, the choice has been made clear — again. For the second year in a row, Devereux Beach (Devs) has been voted the best first date spot in Isla Vista. A little further from campus than places like Campus Point and Depressions (Manzi) Beach, Devs gives you space to truly connect — just you, your date and the breathtaking view. Also voted “Best smoke spot,” Devs is the perfect place to share a sunset and a smoke with that lucky individual, if both of you are into that.<br><br> As the sun begins to dip below the horizon, the sky explodes in shades of pink, orange and violet, setting the scene for a picturesque moment neither of you will forget. Walk along the sand, explore the tide pools or sit together and watch as daylight fades into a canopy of stars.<br><br> From the tranquil atmosphere to the breathtaking sunsets, every moment at Devs feels like it’s just the two of you in your own private world. It’s more than just a first date spot — it’s the perfect setting to spark a connection and lay the groundwork for many more memories to come.",
            description: 'As the sun begins to dip below the horizon, the sky explodes in shades of pink, orange and violet, setting the scene for a picturesque moment neither of you will forget. Walk along the sand, explore the tide pools or sit together and watch as daylight fades into a canopy of stars.',
            location: {
                center: [-119.87557, 34.40816],
                zoom: 17.14,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{id: 'devs_2',
            alignment: 'right',
            drawing: './assets/devs_drawing.png',
            hidden: false,
            title: "Best Smoke Spot: Devereux Beach",
            byline: "By Juliet Becker",
            image: './assets/devs.jpg',
            description: "When you’re stoned out of your mind, it’s beautiful to see the tall grasses waving in the breeze, waves crashing on the beach and people connecting with one another.",
            more: 'Devereux Beach, affectionately known as Devs, might just be the Isla Vista equivalent of the regency-era promenade. At sunset, one can observe a slice of I.V. life, with a cross-section of gossiping girl groups, first dates, wannabe-yogis, mediocre guitar players and, most importantly, stoners. <br><br>What’s a better place to get high than one with a gorgeous view of the oil rig, a 20-minute walk from civilization and constant winds that will eliminate any possibility of lighting a joint? I personally wouldn’t want to get high anywhere else other than between a makeshift DJ booth and a group of guys drinking loose-leaf yerba mate from mugs.<br><br>Smoking at as popular of a spot as Devs beg some never-ending questions: are those people looking at me? Are those cops? Is that my ex? When can we go to Cucas?<br><br>In all seriousness, Devs is a great place to smoke. When you’re stoned out of your mind, it’s beautiful to see the tall grasses waving in the breeze, waves crashing on the beach and people connecting with one another. Just make sure to bring an extra pair of hands to block the wind while you’re lighting.',
            location: {
                center: [-119.87557, 34.40816],
                zoom: 17.14,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {id: 'woodstocks',
            alignment: 'left',
            hidden: false,
            title: "Best Beer Pitcher Deal: Woodstock's",
            byline: "By Stella Mullin",
            image: './assets/beer.jpg',
            more: "Let’s cut to the chase: Woodstock’s wins best beer pitcher (for the fifth year in a row, shocker). If that’s not enough to convince you to fork over the $9.99 (after 9 p.m. Monday through Friday), I don’t know what more I can say. There’s a bunch of different beers, there’s trivia on Thursdays, live music on Wednesdays, big red booths you can sit in and everything else that was there the last four times they’ve won. Stop wasting time reading, head on over to Woodstock’s and get yourself that pitcher! This is technically under the word count, do you want me to fill the rest with the 99 bottles of beer on the wall?",
            description: 'There’s a bunch of different beers, there’s trivia on Thursdays, live music on Wednesdays, big red booths you can sit in and everything else that was there the last four times they’ve won.',
            location: {
                center: [-119.85538, 34.41230],
                zoom: 20.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'Blenders_hangover',
            alignment: 'right',
            hidden: false,
            title: 'Best Hangover Cure: Blenders',
            byline: "By Tornike Bortsvadze",
            image: './assets/blenders_store.jpg',
            description: "While being what seems like one of the smallest buildings in the world, with no outside seating and nowhere to stand without blocking the menu, the Blenders in Isla Vista is a safe haven for those looking for a sweet treat after a night of excess.",
            more: "Looking through my Chase Bank statements of the past quarter alone, it seems as though I have spent $2,000 at Blenders In The Grass. I am addicted to Blenders. It is all I think about every day and every hour of my life. Some may say that the best hangover cure is to crack a beer at the crack of dawn, but they have obviously never experienced the tropical tang of the Red Mango (voted Best Blenders Flavor, by the way) nor the creamy thickness of the Peanut Butter on a bitter Sunday morning. <br><br>While being what seems like one of the smallest buildings in the world, with no outside seating and nowhere to stand without blocking the menu, the Blenders in Isla Vista is a safe haven for those looking for a sweet treat after a night of excess. All this with the added benefit of technically eating your fruit and veggies! Just don’t look too closely at how much ice cream or sherbet is included in every drink.<br><br>Nevertheless, in a world of god-awful hangover cures, like the one overheard today of egg yolks and Advil, you really cannot go wrong with a Blenders smoothie.<br><br>P.S. don’t buy a Blenders visor if you have a big head; mine doesn’t fit ):",
            location: {
                center: [-119.85655, 34.41326],
                zoom: 21.44,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            },
        {id: 'Blenders',
            alignment: 'right',
            hidden: false,
            title: 'Best Blenders Flavor: Red Mango',
            byline: "By Kaavya Saini",
            drawing: './assets/blenders_drawing.png',
            image: './assets/smoothie.jpg',
            description: "Fresh, customizable and deeply nostalgic, Red Mango is an I.V. staple and the undisputed best of what Blenders has to offer.",
            more: "There are a few things that feel quintessentially Isla Vista: sunset treks on Del Playa Drive, thrifting in the park with a tote thrown over your shoulder and seeing the massive smoothie on the roof of Blenders In The Grass. Whether you’re recovering from a crazy night out or just looking for a refreshing treat before your sleepy 8 a.m. lecture, chances are you’re ordering Red Mango.<br><br>Packed with mango juice, frozen yogurt, orange sherbet, banana and strawberries, Red Mango is a flavor bomb of tropical sweetness. Mango (which is the king of fruits for a reason) takes the lead with its bold, bright and sun-soaked flavor. The addition of banana and strawberries creates a perfect medley of delicious, fruity richness that tastes like a beach vacation in a cup.<br><br>There’s nothing better than an early morning trek to the beach to watch some waves (or catch them) with Blenders in hand. It’s a comforting ritual and a little slice of California living.<br><br>Don’t forget to cash in your free supplement: a boost of probiotics or some immune support can turn your smoothie into a healthier treat. Fresh, customizable and deeply nostalgic, Red Mango is an I.V. staple and the undisputed best of what Blenders has to offer.",
            location: {
                center: [-119.85655, 34.41326],
                zoom: 21.44,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            },
        
        {id: 'wingstop',
            alignment: 'left',
            hidden: false,
            title: 'Best Food Deal: Wingstop 20 for $20',
            byline: "By Piper Cheney",
            image: './assets/wingstop.jpg',
            description: "Wingstop is the most worshipped Isla Vista sanctuary, if you will; a holy ground for those begging their parents for just a few more dollars to last them through the end of the quarter.",
            more: "It's the end of the school year; either you have already spent your last paycheck on Snag deliveries to the library or your allowance given to you by your out-of-state parents has run drier than the kegs on Del Playa Drive. You still have a few days left in Isla Vista, and your molding mini fridge has officially been emptied of your favorite Trader Joe’s frozen meals. That dreaded feeling hits — the one of opening your banking app. Your heart sinks to your grumbling stomach: $20 remains in the bank. <br><br>Isla Vista restaurants are not hiding the daunting fact that inflation has hit; a meal found anywhere on Pardall Road or Embarcadero del Norte is going to cost you the spare change you find in the pockets of your sun-stained jorts, the bottom of a sandy tote bag or your drained bank account. <br><br>Fear not fellow brokies: our beloved Wingstop has you and your friends covered with their “20 Wings for $20” deal. Students, probably after a bong rip or two at Devereux Beach, have crowned the neon green hot spot the best food deal in Isla Vista. <br><br>The deal easily feeds three people, although it may be fewer before a high-pressure organic chemistry exam or after a plastic bottle of vodka. With the deal, you get 20 different wings along with the difficult choice of three out of the nine classic Wingstop sauces to coat the delicacies in. Wingstop is the most worshipped Isla Vista sanctuary, if you will; a holy ground for those begging their parents for just a few more dollars to last them through the end of the quarter. Spend those dollars carefully: spend them on some lemon pepper wings. After all, it’s the end of the school year — you deserve it.",
            location: {
                center: [-119.85522, 34.41332],
                zoom: 20.7,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'ivdrip',
            alignment: 'right',
            hidden: false,
            title: 'Best Sweet Treat: I.V. Drip',
            image: './assets/drip.jpg',
            drawing: './assets/drip_drawing.png',
            byline: "By Sneha Cheenath",
            more: "When it’s the middle of the quarter, I’m five lectures behind in all my classes and irretrievably burned out, there’s one thing I know will lift my spirits enough to drag me out of a severe academic slump: the I.V. Drip cookiewich.<br><br>A generous scoop of McConnell’s ice cream between two crunchy-chewy cookies is the only thing that can motivate me to accidentally download my 200-page PDF textbook for the fourth time, and I’m infinitely grateful for it. I’m a fan of a lot of Isla Vista establishments, but the indulgence of the cookiewich gives I.V. Drip a transcendiary status, from eatery to oasis. <br><br>Be warned — the cookiewich is not to be taken lightly. I’m a notoriously slow eater, but even I have learned the importance of moving fast to beat the rapidly melting ice cream and softening cookies. <br><br>But don’t fret, if you’re lacking the appetite or dexterity to successfully conquer a cookiewich, then I.V. Drip has plenty of other great options for a sweet treat: In addition to regular ice cream and cookies, they also offer brownies, milkshakes and cupcakes! <br><br>So next time you’re struggling to get yourself out of bed and into the library, treat yourself to I.V. Drip on the way over, and your grades and taste buds will thank you. ",
            description: 'The indulgence of the cookiewich gives I.V. Drip a transcendiary status, from eatery to oasis.',
            location: {
                center: [-119.85556, 34.41287],
                zoom: 20.32,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'ILP',
            alignment: 'left',
            hidden: false,
            title: 'Best Lecture Hall: Interactive Learning Pavillion',
            byline: "By Madeline Bryce",
            image: './assets/ilp.jpg',
            description: 'Housed in the crown jewel of campus, the ILP, this lecture hall addresses the concerns of students and professors alike: tables instead of old pull-out desks, and bright lights and shiny interiors which prevent mid-lecture naps.',
            more: "Going to UC Santa Barbara, it’s easy to forget that the beach isn’t our classroom, and in order to get the most out of our education (and our tuition), we must reluctantly drag ourselves inside, away from the sun. As I’m sure we’ve all come to realize during our time at school, lecture halls can make or break your learning experience. <br><br>Campbell Hall’s distance from Isla Vista and its huge size only emphasizes the poor attendance rate of lectures, but its circular nature is a definite bonus. In Buchanan Hall, coughing fits echo throughout the whole building, making it super hard for the professor to be heard over the sound of frat flu. Don’t even get me started on Harold Frank Hall or Girvetz Hall, with their dank 1960s interior and their creaky seats. <br><br>This brings us to the shining star that is the Interactive Learning Pavilion (ILP) lecture hall. Housed in the crown jewel of campus, the ILP, this lecture hall addresses the concerns of students and professors alike: tables instead of old pull-out desks, and bright lights and shiny interiors which prevent mid-lecture naps. The chairs are movable, accommodating students of all leg lengths and attention spans. The ILP lecture hall was chosen by the student body for its dedication to furthering our education, with updated accommodations for the modern student, and a cheeky side of aesthetics.",
            location: {
                center: [-119.8456, 34.41253],
                zoom: 18,
                pitch: 35,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            drawing: "./assets/ilp_drawing.png",
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'deli',
            alignment: 'right',
            hidden: false,
            title: 'Best Drunchies: I.V. Deli Mart',
            byline: "By Lucy Dixon",
            image: './assets/deli.jpg',
            more: "February 2024. I have just been to see “The Rocky Horror Picture Show” for the second time and my chest proudly reads “SLUT.” Standing in the fluorescent glow of I.V. Deli Mart, my friends and I await our treasure. Minimally clothed “Rocky Horror” patrons surround us, goosebumps rise on stomachs, chests and thighs. The speaker finally crackles to life.  <br><br>December 2023. My friends and I are one Hello Kitty-engraved bottle of Prosecco deep, wrists finally their own again. We don’t know where we are, but we know where we’re going. Our hearts lead the way, and soon we’re trading bites of Buffalo Chicken Cheese Fries and Animal Style Fries while taking the perfect selfie. <br><br>October 2022. My roommates and I clutch each other down Pardall Road, our sojourn back to Anacapa Residence Hall lies before us. I.V. Deli Mart appears like a mirage, a watering hole meant to fuel us for our journey home. We don’t know what to get, but whatever it is has to be big enough for three. <br><br>January 2025. It’s as good as I remember. Although my study abroad provided me with a vast array of drunchie options, nights at the club left me longing for the efficiency and grease of the Deli. This time, I savor every bite. <br><br>June 2024. My friends, a band show, 68 Del Playa Drive. The clock strikes 12 a.m., and we take our cue. Walking down the street, my friend Sury and I cheer on our friends as they give each other piggyback rides. The rest of our friends are long gone, speed walking to beat the Deli rush. We bring up the rear, but we don’t mind. We’ll get there eventually. ",
            description: 'My roommates and I clutch each other down Pardall Road, our sojourn back to Anacapa Residence Hall lies before us. I.V. Deli Mart appears like a mirage, a watering hole meant to fuel us for our journey home.',
            location: {
                center: [-119.8563, 34.41292],
                zoom: 20.3,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'caje_coffee',
            alignment: 'left',
            hidden: false,
            title: 'Best Coffee: Cajé',
            byline: "By Samantha Dillon",
            image: './assets/caje.jpg',
            more: "For two summers in a row, my iPhone alarm would go off at exactly 4 a.m. And if you’ve ever had an 8 a.m. class, you know the alarm I'm talking about. Radar. Burned into our brains forever. <br><br>I wasn’t waking up that early because I’m someone who starts the day with an ice bath. I was a barista. A coffee artist, if you will. And every opening shift, I mentally prepared for one thing: one of my favorite regulars, who walked in the door every single day at 6:30 a.m. on the dot. <br><br>Despite our never-ending list of handcrafted drinks, he only ever wanted one thing: two perfectly pulled shots of espresso. Hot. <br><br>In light of this, I’ve spent years perfecting my espresso pull. Grinding beans, adjusting the machine, practicing the timing, even buying a pair of jorts. So when the people of Isla Vista spoke and crowned Cajé the Best Coffee in I.V., I couldn’t agree more. Because as someone who’s had, conservatively, 2,000 shots of espresso in their life, I know what’s good. And Cajé has got it. <br><br>My personal favorite? Their cappuccino. It’s the perfect way to experience their full-bodied Venus blend and get you through that 7 a.m. pre-midterm study session. But for all you latte lovers, stop by and try their caramel latte. It’s smooth, creamy and just sweet enough to pull you out of that post-weekend hangover you probably aren’t hiding very well.<br><br>Trust me — I couldn’t have done better myself.",
            description: 'Because as someone who’s had, conservatively, 2,000 shots of espresso in their life, I know what’s good. And Cajé has got it.',
            location: {
                center: [-119.85526, 34.41203],
                zoom: 21,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'caje_matcha',
            alignment: 'left',
            hidden: false,
            title: 'Best Matcha: Cajé',
            byline: "By Anusha Singh",
            image: './assets/caje.jpg',
            more: "I am nothing if not a matcha snob. Therefore, living in Isla Vista, with its lack of authentic matcha, pains me. Yet, in my lowest moments, when no one else got me, Cajé matcha got me. <br><br>Cajé matcha is in a category of its own — it can transcend the boundaries of what matcha is supposed to be to the point of confusion. Upon taking a clumpy sip of Cajé matcha, one may even raise the question, as Lorde once asked, “What was that?” <br><br>The occasional clump at the bottom is a recurring character in this drink’s story. But honestly? It kind of adds to the charm. The drink’s subtly sweet flavor and warm foam top also make up for any clumps you may find. Paired with a Cajé bagel, this matcha is my go-to pick-me-up after any class I have in I.V. Theater — whether that’s at 9 a.m. or 6 p.m. (Thank you, Cajé, for being open until 8 p.m.). <br><br>Not only is this matcha great to sip on after class, but it’s also great to sip on while you’re receiving life-changing gossip from your friends. I cannot count the number of times I’ve almost spit out my Cajé matcha on a Saturday morning, reeling from the events of the previous night. <br><br>I’ve sipped on a Cajé matcha after acing my first chemistry midterm and failing the second one. I’ve sipped on a Cajé matcha while telling my friends about my breakup. I’ve sipped on a Cajé matcha during late nights at the Nexus office and I’ve sipped on a Cajé matcha during some of my most cherished moments with my girls. <br><br>So, if you take anything from this, let it be that Cajé matcha will always be there for you, clumps and all. ",
            description: 'Cajé matcha is in a category of its own — it can transcend the boundaries of what matcha is supposed to be to the point of confusion.',
            location: {
                center: [-119.85526, 34.41203],
                zoom: 21,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            drawing: "./assets/caje_doodle.png",
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'library',
            alignment: 'right',
            hidden: false,
            title: 'Best Library Floor: Second',
            byline: "By Shayla Prasad",
            image: 'assets/lib.jpg',
            description: "Home to many academic weapons and various loungers, the second floor is welcoming to all. ",
            location: {
                center: [-119.845, 34.41379],
                zoom: 17.97,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            more: "It is a sunny Thursday morning, and your schedule is free until your 11 a.m. class in the Interactive Learning Pavilion. You decide to trek to the UC Santa Barbara Library and stumble upon the age-old question: “What floor are we thinkin’?”  You flip through various mental pictures of each floor, and boom. You nod to yourself in agreement — the second floor. <br><br>Home to many academic weapons and various loungers, the second floor is welcoming to all. The floor is unique in that its ambiance changes as you walk from the far end of Ocean Side, closest to the Interactive Learning Pavilion (ILP), with its yellowish wooden cubicles and long tables accompanying the Ethnic and Gender Studies room, to the brightly lit area contrasted by dark wooden tables looking out to the Arbor walkway and Mountain Side green lawns. <br><br>As a second floor frequenter, I can attest to the various “vibes” spread across the floor. One of my favorite sections of the second floor is what I call the “chandeliers,” where artistically crafted lighting floats above the large wooden tables in front of the library's main entryway. This place is best for studying with friends who need to lock in but can still chat here and there. <br><br>If you walk past the chandeliers toward Mountain Side, you will probably stumble upon the infamous red booths. Legend says if you are lucky enough to attain one of the red booths, it is a lucky day. <br><br>I might have to award the section that sits above the first floor’s Summit Café, overlooking the Arbor, as the best spot. Nothing is better than walking into that section farthest on Mountain Side, finding an empty table near a window and being able to successfully lock in. <br><br>P.S. Locked in or not, the second floor is definitely ranked first on vibes.",
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {id: 'market',
            alignment: 'left',
            hidden: false,
            title: 'Best Convenience Store: I.V. Market',
            byline: "By Andrew Tolu",
            image: './assets/market.jpg',
            drawing: './assets/market_drawing.png',
            more: "You missed the bus. <br><br>You’re having people over for dinner in 40 minutes and your one friend with a car accused you of “just using them for their car,” whatever that means.<br><br>So, you trek on over to the one place you know will always have the essentials for your world famous specialty three-course meal — a party sized bag of Doritos to start, Kraft Mac & Cheese for the main and Ghirardelli boxed brownie mix for dessert. What’s more convenient than that? <br><br>There is no greater feeling than walking on over to Isla Vista Market, being hit with their familiar scent of incense and grabbing all (or most of) the essentials you could ever need, just in the knick of time. Is it expensive? Well … maybe a bit, but what are you gonna do? Go to I.V. Deli Mart? Exactly. Half the selection for twice the price — absolutely not.<br><br>I, personally, am glad I.V. Market is getting the recognition it deserves. I.V. Market stands out among other Isla Vista establishments as being truly convenient beyond just late-night drunchies. It’s there for your recovery the next morning, for your lunch the next day and to hold you over until your friend with a car (finally) forgives you.",
            description: 'There is no greater feeling than walking on over to Isla Vista Market, being hit with their familiar scent of incense and grabbing all (or most of) the essentials you could ever need, just in the knick of time.',
            location: {
                center: [-119.8574, 34.41227],
                zoom: 19.88,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'pizza-pub',
            alignment: 'right',
            hidden: false,
            title: 'Best Pizza: IV Pizza Pub',
            byline: "By Siddharth Chattoraj",
            image: './assets/pizza.jpg',
            more: "I went with a couple of friends for an afternoon lunch at IV Pizza Pub, and their friendly staff immediately made us feel welcome. Their iconic triangle box and pizza-by-the-slice setup make it easy to try something new every time.<br><br>The Fort Point pizza with chicken, artichoke, Roma tomatoes and pesto is divine. The basil and herbs add a burst of freshness that ties all the flavors together, and the pesto sauce is creamy and full of flavor — definitely not an afterthought.<br><br>I love toppings so much and can never pick just one. Luckily, at IV Pizza Pub you can create your own pizza with a huge variety of toppings to choose from. Olives and cherry tomatoes are always impressively fresh and bring a vibrant pop to every bite.<br><br>IV Pizza Pub is a true Isla Vista classic — perfect for a quick slice or a laid-back hangout with friends.",
            description: 'IV Pizza Pub is a true Isla Vista classic — perfect for a quick slice or a laid-back hangout with friends.',
            location: {
                center: [-119.85541, 34.41097],
                zoom: 20.84,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            drawing: "./assets/pizza_doodle.png",
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'freebirds',
            alignment: 'left',
            hidden: false,
            title: 'Best Burrito: Freebirds',
            byline: "By Anushka Ghosh Dastidar",
            image: './assets/burrito.jpg',
            more: "One pound and six ounces, swaddled in foil, warm to the touch and cradled — what may have the feel and value of a premature infant is in fact the best burrito in Isla Vista. <br><br>The large yellow sign reading “FREEB!RDS” serves as a beacon of light at all hours of the day. Whether it’s your post-dayge energizer, late-night revitalizer or munchie satisfier, these burritos will always be there to sustain you.<br><br>With lines out the door on the holiest of days — Deltopia — Freebirds is the spot out-of-towners remember and keep coming back to. It's the central meeting point when you separate from your friends and your pit stop on the way to the next function.<br><br>In a college town where eating options are scarce and time to eat between work and class is scarcer, Freebirds, being a mere one block away from campus, is the natural go-to spot. Body one of these burritos and feel your cravings be satisfied for the entire day.<br><br>I’ve watched friendships begin over Freebirds, I’ve seen people fall in love sharing a burrito and I’ve witnessed many arguments emerge and subdue following the satiating of one’s hangriness. That's the kind of emotion these burritos invoke. In line as you build your order, they’re filling the tortilla with beans, guac, your hopes and dreams, a sprinkle of love and cheese on top.<br><br>As a quintessential symbol of I.V. serving a variety of palatable flavors, it's no wonder students agree Freebirds has the best burritos.",
            description: 'I’ve watched friendships begin over Freebirds, I’ve seen people fall in love sharing a burrito and I’ve witnessed many arguments emerge and subdue following the satiating of one’s hangriness.',
            location: {
                center: [-119.85567, 34.41327],
                zoom: 20.34,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'birchwood',
            alignment: 'right',
            hidden: false,
            title: 'Best I.V. Band: Birchwood',
            byline: "By Lauren Chiou",
            image: './assets/birchwood.jpg',
            more: "A sound that draws 400 people to drive up the Santa Barbara mountains, listening to folk music as the sun sets. A Woodstock's Pizza crowd so big, it blocks off the street entirely. A Saturday night backyard show on Fortuna Lane so packed, people were climbing trees just to get a good view of the band on the wooden stage. <br><br>Not many Isla Vista bands could do this. But there’s something about Birchwood, a country, folk and bluegrass group, that has people scaling mountains and standing in streets, swaying back and forth to the Birchwood sound.  <br><br>\“The band scene here, it’s not just musicians that care about it,\” Birchwood lead singer and third-year psychological & brain sciences major Molly O’Connell said. \“You don’t [see] it anywhere else where the crowd comes and supports kids playing.\”<br><br> O’Connell is joined by singer and guitarist and fourth-year statistics and data science major Beckett Dowhan, lead guitarist and fourth-year computer engineering major Nik Belle, banjo and singer and fourth-year psychological & brain sciences major Toby Gollan-Myers, drummer and third-year biology major Xander Newell, bassist and fourth-year environmental studies major Justin Pendrey, fiddlist and second-year economics major Rowan Crass and keyboardist and fourth-year psychological & brain sciences major Prahalad Mitra. Since their creation in Winter Quarter 2024, the band has attracted a large number of local fans drawn to their signature folksy sound and on-stage charm.<br><br>Birchwood plays about two to three shows a week, always attracting herds of people, like moths to a bluegrass flame. Currently sitting at over 3,400 Instagram followers and a couple of viral TikToks featuring them under their belt, Birchwood is by far one of the most popular bands in Isla Vista at the moment. <br><br>To O’Connell, performing with Birchwood has been the highlight of her college career thus far. <br><br>\“It's a pivotal part of my college experience so far, and I’m so grateful for it,\” she said.<br><br>While multiple members of the band are graduating in 2025, the life of Birchwood will still continue on. <br><br>\“We’re going to try and keep it running,\” O’Connell said. <br><br>For more information about Birchwood, check out their Instagram @birchwoodsb. O’Connell’s latest single \“Tugowar\” is out on Spotify now under Molly O’Connell, and features instrumentals by Birchwood members.",
            description: 'A sound that draws 400 people to drive up the Santa Barbara mountains, sitting atop grassy patches of dirt listening to folk music as the sun sets. A Woodstock\'s Pizza crowd so big, it blocks off the street entirely, people entranced by the country twang underneath the neon sign. A Saturday night backyard show on Fortuna Lane so packed, people were climbing trees just to get a good view of the band on the wooden stage.',
            location: {
                center: [-119.86621, 34.41287],
                zoom: 17.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            drawing: "assets/band_doodle.png",
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {id: 'bagel',
            alignment: 'left',
            hidden: false,
            title: 'Best Bagel: IV Bagel Cafe',
            byline: "By Alicia Siebers",
            drawing: './assets/bagel_drawing.png',
            image: './assets/bagel.jpg',
            more: 'I unearthed the joy of bagels in seventh grade at a five-day summer camp. After eating three mini bagels at every single meal — that’s 45 bagels, give or take a few — I decided that I was all-knowing in the realm of the beloved holey bread roll and all the foods that could go in between, from cream cheese to pesto to avocado. Luckily, there’s a spot in Isla Vista that matches my freak. <br><br>Tucked into a bottom corner unit of the yellow building where Trigo Road meets Little Acorn Park, IV Bagel Cafe is the perfect place to hide from the consequences of last night’s actions or grab breakfast before the first 8 a.m. lecture you’ve woken up in time for all quarter. No matter what demons you’re fighting, there will be a stirringly animated employee behind the counter who gets paid to watch patiently as you deliberate over the robust menu (or at least pretend to) before walking up and ordering your go-to anyway. <br><br>Whether your jam is a cool, open-faced stack of lox, onion and tomato with your choice of schmear and sprinkle of lemon pepper (the Hampton) or a hot, protein-rich combo of egg and cheese smashed between the bread (the Eggle), IV Bagel Cafe already has a name and fan base for it. A hearty bagel sandwich with sprouts and other green, vaguely leafy things? There are a handful of options just like that on the menu, take your pick. <br><br>And it gets better, because you can still get the most bag’ for your buck with the throwback special pricing they’ve been running every weekday since Feb. 19. I hear the deal might wrap up as the school year comes to a close though, so don’t just sit around waiting for your demons to chase you out of the house on a Monday morning. Go forth and get sucked into the (IV) bagel.',
            description: 'Tucked into a bottom corner unit of the yellow building where Trigo Road meets Little Acorn Park, IV Bagel Cafe is the perfect place to hide from the consequences of last night’s actions or grab breakfast before the first 8 a.m. lecture you’ve woken up in time for all quarter.',
            location: {
                center: [-119.8571, 34.411],
                zoom: 19.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
