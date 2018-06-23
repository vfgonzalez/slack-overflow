import React from "react";
import "./Categories.css";
import { Carousel } from "react-materialize";
import catArray from "../../catArray.json";

const Categories = props => (

    <div>

        <div>
            <Carousel
                options={{
                    dist: -60,
                    shift: 60,
                    indicators: true
                }}
                children={catArray.map((cat) => {
                    return (
                        <img
                            key={cat.id}
                            onClick={() => { props.onImageClick(cat) }}
                            src={cat.image}
                        />
                    );
                })}
            />

        </div>

    </div>

);

export default Categories;