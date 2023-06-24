import React from "react";
import TypesOfCheeseburgers from "../components/Types-of-cheeseburgers";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
}


const ContentCheeseburger = () => {
    return (
        <>
            <div className="flex-cheeseburger">
                    <TypesOfCheeseburgers/>
            </div>
        </>
    )
}

export default ContentCheeseburger;