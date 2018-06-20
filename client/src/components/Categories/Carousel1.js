import React from "react";
import "./Carousel.css";
import { Carousel, CardTitle, Card } from "react-materialize";
// import cards from "../cards.json";



let catArr = [

    {
        "id": 1,
        "name": "General Tools",
        "image": "./images/generaltools.png",
        "description": "Enter text here"
    },
    {
        "id": 2,
        "name": "Teaching Resources",
        "image": "./images/teachingresources.png",
        "description": "Enter text here"
    },
    {
        "id": 3,
        "name": "CSS",
        "image": "./images/css.png",
        "description": "Enter text here"
    },
    {
        "id": 4,
        "name": "Testing",
        "image": "./images/testing.png",
        "description": "Enter text here"
    },
    {
        "id": 5,
        "name": "Javascript",
        "image": "./images/javascript.png",
        "description": "Enter text here"
    },
    {
        "id": 6,
        "name": "API",
        "image": "./images/api.png",
        "description": "Enter text here"
    },
    {
        "id": 7,
        "name": "Databases",
        "image": "./images/databases.png",
        "description": "Enter text here"
    },
    {
        "id": 8,
        "name": "NPM Packages",
        "image": "./images/npmpackages.png",
        "description": "Enter text here"
    },
    {
        "id": 9,
        "name": "Templates",
        "image": "./images/templates.png",
        "description": "Enter text here"
    },
    {
        "id": 10,
        "name": "Common Issues",
        "image": "./images/commonissues.png",
        "description": "Enter text here"
    },
    {
        "id": 11,
        "name": "Job Resources",
        "image": "./images/jobresources.png",
        "description": "Enter text here"
    },
    {
        "id": 12,
        "name": "HTML",
        "image": "./images/html.png",
        "description": "Enter text here"
    },
    {
        "id": 13,
        "name": "Random",
        "image": "./images/random.png",
        "description": "Enter text here"
    },
    {
        "id": 14,
        "name": "Podcasts",
        "image": "./images/podcasts.png",
        "description": "Enter text here"
    },
    {
        "id": 15,
        "name": "Slack Submissions",
        "image": "./images/slacksubmissions.png",
        "description": "Enter text here"
    },
    {
        "id": 16,
        "name": "Text Submissions",
        "image": "./images/textsubmissions.png",
        "description": "Enter text here"
    }
]




// console.log(cat)


const Categories1 = props => (

    <div>



        <Carousel images={[

            {
                catArr.map(cat => {

                    <Card className='small'
                        header={<CardTitle
                            image={cat.image}>
                            Card Title </CardTitle >}
                        actions={[<a href='#'>This is a Link</a>]} >
                        I am a very simple card.
    </Card >

                })
            }


            // <Card className='small'
            //     header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
            //     actions={[<a href='#'>This is a Link</a>]}>
            //     I am a very simple card.
            // </Card>

            //             <Card className='small'
            //                 header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
            //                 actions={[<a href='#'>This is a Link</a>]}>
            //                 I am a very simple card.
            //             </Card>,

            //             <Card className='small'
            //                 header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
            //                 actions={[<a href='#'>This is a Link</a>]}>
            //                 I am a very simple card.
            // </Card>,

            //             <Card className='small'
            //                 header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
            //                 actions={[<a href='#'>This is a Link</a>]}>
            //                 I am a very simple card.
            //             </Card>


        ]} />

        <p> hello world</p>


    </div>
);

export default Categories1;