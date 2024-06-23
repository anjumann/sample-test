import About from "./home/About"
import Contact from "./home/Contact"
import HeadSection from "./home/HeadSection"
import MediaSection from "./home/MediaSection"

const Home = () => {
    return (
        <div className="w-11/12 mx-auto mt-6" >
            <div className="">
                <HeadSection />
            </div>



            <div className="mt-16 flex gap-4 ">
                <div className="w-9/12 rounded-md border ">
                    <About />
                </div>
                <div className="w-3/12 flex flex-col gap-5 ">
                    <div className="rounded-md border">
                        <MediaSection />
                    </div>
                    <div className="rounded-md border">
                        <Contact />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home