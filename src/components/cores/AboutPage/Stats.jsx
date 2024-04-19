import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section className='bg-[#2C333F]'>
        <div className='flex justify-center '>
            <div className='flex gap-x-5'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index} className='px-16 py-10'>
                                <h1 className='font-extrabold text-4xl'>
                                    {data.count}
                                </h1>
                                <h2 className='text-[#585D69] font-bold'>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
