import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "./container";


export default function Layout ({children}) {
    return (
        <>
         <Header />

         <main>
            <Container>{children}</Container>
        </main>

         <Footer />
        </>
    )
}