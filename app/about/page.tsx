import Footer from "@/components/footer";
import Header from "@/components/header";

export default function about(){
    return(
        <div>
        <Header/>
            <h1 className="text-center text-4xl font-bold text-red-700">About</h1>
            <p className="text-center justify-center text-2xl  border-red-700 w-1/2 mx-auto p-10 text-red-700  ">I am developer
            Welcome to my website! I am a front-end developer with a passion for crafting beautiful, functional web
             applications using modern technologies like HTML, CSS, and TypeScript.
            </p>
        <Footer/>
        </div>
    )
}