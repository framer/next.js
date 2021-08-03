import Head from "next/head"
import Features from "https://framer.com/m/Features-RZDI.js@VtnOh9SyPQjYJdUOpHaM"
import { Container } from "../components/Container"
import { Navigation } from "../components/Navigation"

function Header(props) {
    const { children } = props

    return (
        <div className="header" style={{ backgroundColor: "#E60150" }}>
            {children}
            <h1>
                Design and publish all in one canvas—where professionals create
                unique online brands.
            </h1>
        </div>
    )
}

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Framer Modules</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
                <Navigation />
            </Header>

            <Features />
        </Container>
    )
}
