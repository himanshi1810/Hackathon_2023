function Dashboard(){
    return(
        <div className="bg-richblack-800 flex justify-center items-center text-white h-[90%] max-w-[11/12] text-[1.2rem]">
            <div className=" flex  bg-white rounded-sm shadow-md shadow-richblack-100 justify-between w-[100%] mb-3 mr-1 font-medium text-black">

                    <div className="ml-6">
                        <h1>Hostel Management</h1>
                    </div>

                    <div className="flex gap-1 mr-6">
                        <img src={Profile} width="25px" />
                        <span> Student</span>
                    </div>

                </div>
                

                <div className="flex gap-24">

                    <div className="ml-6 text-white font-semibold h-[750px]
                    px-3  w-[250px]
                    ">
                        <h4 className="text mb-3 cursor-pointer
                        hover:text-blue-900 hover:underline">Dashboard</h4>
                        <h4 className="mb-3  hover:text-blue-900 hover:underline cursor-pointer">Room Allocation</h4>
                        <h4 className="mb-3  hover:text-blue-900 hover:underline cursor-pointer">Recieved complain</h4>
                        <h4 className="mb-3  hover:text-blue-900 hover:underline cursor-pointer">Personal information</h4>
                    </div>

                    <div className="flex flex-col">
                            <div className=" gap-[15px] flex flex-row ">
                                    
                                    <div  className="bg-yellow-500  flex flex-col justify-center items-center text-richblack-900 font-semibold mt-10 mr-3 rounded-md h-[240px] w-[460px]">
                                        <h2>Students</h2>
                                        <p>Girls Students:- 180</p>
                                        <p>Boys Students:-540</p>
                                    </div>

                                    <div className="bg-yellow-500  flex flex-col justify-center items-center text-richblack-900 font-semibold mt-10 mr-3 rounded-md h-[240px] w-[460px]">
                                        <h1 >Total rooms</h1>
                                        <p>Girls Hostel Room:-60</p>
                                        <p>Boys Hostel Room:-180</p>
                                    </div>
                                    
                                </div>

                            
                            <div>
                                <div className="bg-yellow-500 h-[240px] w-[460px] flex flex-col justify-center items-center text-richblack-900 font-semibold rounded-md ml-52 mt-8 ">
                                    <p>Total Branches</p>
                                    <p>10</p>
                                </div>

                            </div>
                    </div>
                    


                </div>

           
        </div>
    );
}

export default Dashboard;
