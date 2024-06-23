import { StarIcon, UserRoundCheck, UsersRound } from "lucide-react"
import { Button } from "../shared/Button"


const HeadSection = () => {
  return (
    <div className="relative px-5 border rounded-md  " >

      <div className="py-11"></div>
      <div className=" p-1 border-2 border-gray-100 w-fit rounded-lg ">
        <img src="/logo.jpeg" className="border-2 border-gray-100 h-16 w-16 " />
      </div>
      <div className=" mt-6">
        <div className="flex justify-between ">
          <div className="text-xl font-semibold ">
            Harvard University: Acceptance Rate, Fees & Courses <span className=" bg-[#FFF7ED] text-[#E37712] px-1.5 py-1 rounded-md text-xs font-semibold ml-2 "> Top 10 </span>
            <div className="text-base text-gray-700/70  ">
              Massachusetts, United States
            </div>
          </div>
          <div className=" flex gap-2">
            <Button variant="outline" size="icon" > <StarIcon size="18" /> </Button>
            <Button variant="outline"  > <UsersRound size="18" className="mr-2" /> Join Group </Button>
            <Button  > <UserRoundCheck size="18" className="mr-2" /> Help Me Decide </Button>
          </div>
        </div>
      </div>

      <hr className="mt-4" />
      <div className="flex gap-3 mt-3  ">

        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, idx) => {
          return (
            <span className={`text-sm font-semibold text-gray-700/80 pb-3 border-b-[3px]  ${idx===0 ? "border-[#f19946]" :" border-white hover:border-[#f19946]" } `}  key={idx} >
              About
            </span>
          )
        })}

      </div>
    </div>
  )
}

export default HeadSection

{/* <div className=" w-10/12 ">
      <img src="/harvard.jpeg" className="absolute -z-10 top-0  overflow-hidden " />
      </div> */}