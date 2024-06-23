import About from "./home/About"
import Contact from "./home/Contact"
import HeadSection from "./home/HeadSection"
import MediaSection from "./home/MediaSection"

const Home = () => {
    return (
        <div className="w-11/12 mx-auto pt-6" >
            <div className="">
                <HeadSection />
            </div>



            <div className="mt-16 flex flex-wrap-reverse gap-4 ">
                <div className=" lg:w-9/12 rounded-md border  bg-white">
                    <About />
                </div>
                <div className="lg:w-3/12 flex flex-col gap-5  ">
                    <div className="rounded-md border  bg-white">
                        <MediaSection />
                    </div>
                    <div className="rounded-md border  bg-white">
                        <Contact />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home