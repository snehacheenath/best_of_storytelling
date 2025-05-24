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
    title: './assets/nexuslogo.png',
    byline: 'By the Daily Nexus Editorial Staff',
    footer: 'Source: source citations, etc. <br> <br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'fully',
            hidden: false,
            title: 'Best Of 2025',
            description: 'Every year the Daily Nexus compiles a list of categories that make Isla Vista, Isla Vista. We then share those places and things with the UC Santa Barbara community so we can elect a winner for each category. The winners were chosen by the community and the content is written by the editorial staff. Our aim is to celebrate the places on and off campus that make this place our home and hard to say goodbye to as we graduate and leave for the summer.',
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
        },{
            id: 'sams',
            alignment: 'left',
            hidden: false,
            title: "Best Sandwich: Sam's to Go",
            image: './assets/sams.JPG',
            description: 'Known to be the perfect spot for a hangover cure, I.V. Bagel Cafe has got you covered with delicious bagel combinations from sweet cinnamon sugar to savory pesto cream cheese.',
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
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, {
            id: 'devs',
            alignment: 'right',
            hidden: false,
            title: "Best Spot for a First Date: Devereux Beach",
            image: './assets/devs.jpg',
            description: 'Known to be the perfect spot for a hangover cure, I.V. Bagel Cafe has got you covered with delicious bagel combinations from sweet cinnamon sugar to savory pesto cream cheese.',
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
        },{
            id: 'devs_2',
            alignment: 'right',
            hidden: false,
            title: "Best Smoke Spot: Devereux Beach",
            image: './assets/devs.jpg',
            description: 'Known to be the perfect spot for a hangover cure, I.V. Bagel Cafe has got you covered with delicious bagel combinations from sweet cinnamon sugar to savory pesto cream cheese.',
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
        {
            id: 'Blenders',
            alignment: 'right',
            hidden: false,
            title: 'Blenders',
            image: './assets/san-fran.jpeg',
            description: "<indent>Every so often, something great happens. Something truly worth remembering, something that sticks with you forever. For me, that happens every time I have a hangover. <br><br>  To quote a wise man, “Well yes!” <br><br>    The first sip of a Cajé mocha on a grey Saturday morning is what gives me hope, what keeps my feet glued to this mortal coil. It is the definition of “girl who is going to be ok”. It reaches somewhere deep within you – somewhere that has calcified and frozen over throughout the terrors of the week – and brings it back to life. <br> <br>  The Cajé mocha (and matcha, and latte, and smoothie and acai bowl) are truly unique. I’ve never had a mocha quite like it: It tastes like it briefly met a chocolate bar once, and then decided to travel the world and become much more interesting. It’s spicy and bitter and sweet and tastes like a warm hug. And every morning after — past, present and future — I could always use one of those.",
            location: {
                center: [-119.8565, 34.41326],
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
            drawing: './assets/cup_cropped.png',
        },
        {
            id: 'ILP',
            alignment: 'left',
            hidden: false,
            title: 'Interactive Learning Pavillion',
            image: './assets/ilp.jpeg',
            description: 'Known to be the perfect spot for a hangover cure, I.V. Bagel Cafe has got you covered with delicious bagel combinations from sweet cinnamon sugar to savory pesto cream cheese.',
            location: {
                center: [-119.84547, 34.41255],
                zoom: 17.85,
                pitch: 30,
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
        {
            id: 'wingstop',
            alignment: 'left',
            hidden: false,
            title: 'Best Food Deal: Wingstop',
            image: './assets/geneva.jpg',
            description: 'If you’re looking for the perfect after-swim snack, a welcoming dine-in space to eat with your friends or just a really good slice of pizza, then I.V. Pizza Pub is the place to be.',
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
        {
            id: 'ivdrip',
            alignment: 'right',
            hidden: false,
            title: 'Best Sweet Treat: I.V. Drip',
            image: './assets/geneva.jpg',
            description: 'If you’re looking for the perfect after-swim snack, a welcoming dine-in space to eat with your friends or just a really good slice of pizza, then I.V. Pizza Pub is the place to be.',
            location: {
                center: [-119.85546, 34.41287],
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
        {
            id: 'caje',
            alignment: 'left',
            hidden: false,
            title: 'Best Coffee: Caje',
            image: './assets/geneva.jpg',
            description: 'If you’re looking for the perfect after-swim snack, a welcoming dine-in space to eat with your friends or just a really good slice of pizza, then I.V. Pizza Pub is the place to be.',
            location: {
                center: [-119.85532, 34.41203],
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
        {
            id: 'pizza-pub',
            alignment: 'right',
            hidden: false,
            title: 'I.V. Pizza Pub',
            image: './assets/pizzapub.jpg',
            description: 'If you’re looking for the perfect after-swim snack, a welcoming dine-in space to eat with your friends or just a really good slice of pizza, then I.V. Pizza Pub is the place to be.',
            location: {
                center: [-119.85534, 34.41097],
                zoom: 20.84,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'freebirds',
            alignment: 'left',
            hidden: false,
            title: 'Freebirds',
            image: './assets/buenos-aires.jpg',
            description: 'With protein choices ranging from chicken to birria to carne asada, Freebirds wraps these up in sizable portions along with vegetables, beans, guacamole and rice, among other additions.',
            location: {
                center: [-119.85558, 34.41327],
                zoom: 20.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'deli',
            alignment: 'right',
            hidden: false,
            title: 'Best Drunchies: I.V. Deli Mart',
            image: './assets/deli.JPG',
            description: 'With protein choices ranging from chicken to birria to carne asada, Freebirds wraps these up in sizable portions along with vegetables, beans, guacamole and rice, among other additions.',
            location: {
                center: [-119.85615, 34.41292],
                zoom: 19.52,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'market',
            alignment: 'left',
            hidden: false,
            title: 'Best Convenience Store: I.V. Market',
            image: './assets/buenos-aires.jpg',
            description: 'With protein choices ranging from chicken to birria to carne asada, Freebirds wraps these up in sizable portions along with vegetables, beans, guacamole and rice, among other additions.',
            location: {
                center: [-119.85752, 34.41227],
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
        {
            id: 'library',
            alignment: 'right',
            hidden: false,
            title: 'Best Library Floor',
            image: 'assets/lib.JPG',
            description: "What the second-floor library has in its shiny veneer and open concept, the fourth-floor, UCSB’s poster child, supplements in its hominess and authenticity.",
            location: {
                center: [-119.84549, 34.41379],
                zoom: 17.97,
                pitch: 60,
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
        }
    ]
};
