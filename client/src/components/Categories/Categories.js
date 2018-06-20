import React from "react";
import "./Categories.css";
import { Carousel} from "react-materialize";
// import cards from "../cards.json";

const Categories = props => (

    <div>

        <Carousel images={[

            <a href="">
                <img src="./images/generaltools.png" />
            </a>,

            <a href="">
                <img src="./images/teachingresources.png" />
            </a>,

            <a href="">
                <img src="./images/css.png" />
            </a>,

            <a href="">
                <img src="./images/testing.png" />
            </a>,

            <a href="">
                <img src="./images/javascript.png" />
            </a>,

            <a href="">
                <img src="./images/api.png" />
            </a>,

            <a href="">
                <img src="./images/databases.png" />
            </a>

        ]} />

        <p> hello world</p>


    </div>
);

export default Categories;