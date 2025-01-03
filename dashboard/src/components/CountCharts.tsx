'use client'

import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';



const data = [

    {
        name: 'Total',
        count: 160,
        fill: 'white',
    },



    {
        name: 'Girls',
        count: 75,
        fill: 'pink',
    },
    {
        name: 'Boys',
        count: 85,
        fill: 'blue',
    },

];

const CountCharts = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* Chart */}
            <div className="w-full h-[75%]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />

                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/* bOTTOM */}
            <div className=" flex justify-center gap-16">
                <div className=" flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaSky rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs  text-gray-300" >Boys (55%)</h2>
                </div>

                <div className=" flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs  text-gray-300" >Girls (55%)</h2>
                </div>
            </div>

        </div>
    )
}

export default CountCharts
