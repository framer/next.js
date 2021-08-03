import Head from "next/head"
import Features from "https://framer.com/m/Features-RZDI.js@VtnOh9SyPQjYJdUOpHaM"
import { Container } from "../components/Container"
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

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
                <h1>
                    Design and publish all in one canvas—where professionals
                    create unique online brands.
                </h1>
            </Header>

            <Features />

            <Footer />
        </Container>
    )
}
