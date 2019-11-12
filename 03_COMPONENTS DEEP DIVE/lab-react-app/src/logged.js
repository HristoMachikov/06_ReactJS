import React from "react";

function logged(Comp, props) {
    class HoCComp extends React.Component {

        render() {
            return <Comp {...props} />
        }

        componentDidMount() {
            console.log("HOC Mounted")
        }
    }

    return <HoCComp />
}

export default logged;