import Footer from "@/components/footer";
import Header from "@/components/header";

export default function portfolio(){
    return(
        <div>
            <Header/>
            <h1 className="text-center text-4xl font-bold text-red-700">Portfolio</h1>
            <p className="text-center justify-center text-2xl  border-red-700 w-1/2 mx-auto p-10 text-red-700  ">A web application built using HTML, CSS, and TypeScript that 
                allows users to create and edit their website. Users can input their details, and the website updates 
                in real-time with form validation and seamless section editing.
            </p>
            <Footer/>
        </div>
    )
}
