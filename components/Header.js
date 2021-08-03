export function Header(props) {
    const { children } = props

    return (
        <div className="header" style={{ backgroundColor: "#E60150" }}>
            {children}
        </div>
    )
}
