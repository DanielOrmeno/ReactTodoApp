import React from "react";

import Header from "./Header";
import Input from "./Input";



class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header title = "Epic TODO App" src = "https://cdn-images-1.medium.com/max/280/1*lKN9xV1YEin-2wfAiGySBA.png"/>
                </div>
                <div>
                    <Input title = "Epic TODO" type = "text" id = "todoField" buttonText = "+"/>
                </div>
            </div>
        );
    }
}

export default App;