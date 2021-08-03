import React from "react"

export function Container({ children }) {
    return (
        <div className="home">
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    style: {
                        width: "100%",
                        ...child.props.style,
                    },
                })
            )}
        </div>
    )
}
