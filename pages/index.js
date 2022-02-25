import Head from "next/head"
import { Tip } from "../components/Tip"
import { Container } from "../components/Container"
import Vocabcard from "https://framer.com/m/vocabcard-DTEj.js@JCLkYdKFeDtqml4Zqyjw"

// A Smart Component from Framer
import Toggle from "https://framer.com/m/Toggle-B5iT.js@X94mtocAj5XithxLESme"

export default function Home() {
    return (
        <>

            <Vocabcard
                variant="card"
            />

            import Vocabcard from "https://framer.com/m/vocabcard-DTEj.js@JCLkYdKFeDtqml4Zqyjw"
            <Head>
                <title>Framer</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Container>
                <Toggle />
                <Tip />
            </Container>
        </>
    )
}
