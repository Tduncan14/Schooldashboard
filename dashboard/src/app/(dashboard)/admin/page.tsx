import UserCard from '@/components/Card'
import CountCharts from '@/components/CountCharts'
import React from 'react'

// admin page

const page = () => {
    return (
        <div>
            <div className="p-4 flex gap-4 flex-col md:flex-row">
                {/* left */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                    {/* UserCards */}

                    <div className="flex gap-4 justify-between flex-wrap ">
                        <UserCard type="student" />
                        <UserCard type="teacher" />
                        <UserCard type="parent" />
                        <UserCard type="admin" />

                    </div>

                    {/* Middle Charts */}
                    <div className=" flex gap-4 flex-col lg:flex-row">
                        {/* Count Chart */}
                        <div className="w-full lg:w-1/3 h-[450px]" >
                            <CountCharts />
                        </div>

                        {/* attendance chart */}
                        <div className="w-full lg:w-2/3 h-[450px]" ></div>



                    </div>


                    {/* Bottom Charts */}



                </div>
                {/* right */}
                <div className="w-full lg:w-1/3">
                    r</div>



            </div>
        </div>
    )
}

export default page
