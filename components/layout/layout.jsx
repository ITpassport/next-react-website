import Footer from "../footer/footer";
import Header from "../header/header";
import Container from "/pages/container";



export default function Layout ({ children}) {
    return(
        <>
        <Header />

        <main>
            <Container>{children}</Container>
        </main>
        
        <Footer />
        
        </>
    )
}