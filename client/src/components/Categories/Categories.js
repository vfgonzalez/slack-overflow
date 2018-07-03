import React, { Component } from "react";
import "./Categories.css";
import { Carousel } from "react-materialize";
import catArray from "../../catArray.json";

let $ = window.$

class Categories extends Component {
    componentDidMount() {

        $('.carousel').carousel('next', 16)
    }

    render() {
        return (
            <div>

                <div id="Carousel">

                    <Carousel
                        options={{
                            dist: -40,
                            shift: 40,
                            numVisible: 16,
                            indicators: true,
                        }}
                        children={catArray.map((cat) => {

                            return (

                                <p
                                    key={cat.id}
                                    id="cards"
                                    onClick={() => { this.props.onImageClick(cat) }}>{cat.name}
                                </p>

                                // old carousel
                                // <img
                                //     key={cat.id}
                                //     onClick={() => { this.props.onImageClick(cat) }}
                                //     src={cat.image}
                                //     alt={cat.name}
                                // />
                            );
                        })}
                    />

                </div>

            </div>
        )
    }
}

export default Categories;