import React, {Component} from "react";
import "./Categories.css";
import { Carousel } from "react-materialize";
import catArray from "../../catArray.json";

let $ = window.$

class Categories extends Component {
    componentDidMount () {

        $('.carousel').carousel('next', 16)
      }
      
    render () {
        return (
            <div>

        <div id="Carousel">
            
            <Carousel
                options={{
                    dist: -60,
                    shift: 60,
                    numVisible:16,
                }}
                children={catArray.map((cat) => {
                    
                    return (
                        <img
                            key={cat.id}
                            onClick={() => { this.props.onImageClick(cat) }}
                            src={cat.image}
                        />
                    );
                })}
            />

        </div>

    </div>
        )
    }
}

export default Categories;