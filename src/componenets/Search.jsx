import axios from 'axios';
import React,{useState} from "react";


const Search = () =>{

    const [loc,setLoc] = useState('Singapore');
    const [resp,setResp] = useState({})
    const [image,setImg] = useState("haze")

    const onChangeInput = (e) => {
        setLoc(e.target.value)
    }

    const getAPIData = (e) => {

        if(e.key === "Enter"){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`,{validateStatus:(status) => {
                return true // default
              }},).then((response) => {
                setResp(response.data)
                
                if(typeof response.data.weather[0] !== undefined){
                    console.log("entering here ==>")
                    if(response.data.weather[0].main.toLowerCase() === "haze" || "clouds"){           
                        setImg(response.data.weather[0].main.toLowerCase())
                }
                
                }else{
                    setImg("haze")
                }
                console.log("response.data ==>",response.data)           
            })
        }
    }

    console.log("image ==>",image)


    return(
    <div className={`bg-cover bg-center bg-${image} h-full`}>
        <div className="flex flex-col w-full h-full backdrop-brightness-50 pt-4">
            <div className='h-17 flex flex-row justify-center mb-20'>
                <input type="text" className="bg-transparent border-solid border-[1px] border-white rounded-full h-15 w-60 p-3 placeholder-shown:text-xl text-white" placeholder="Enter Location"
                onChange={onChangeInput}
                onKeyDown={getAPIData}
                />
            </div>
            <div className=' ml-96 text-white text-2xl'>{resp?.name}</div>
            {
                resp.main? <div className=' ml-96 text-white mt-2 text-8xl font-bold'>{resp.main.temp.toFixed()}°F</div>:null
            }
            {
                resp.weather ? <div className='flex flex-row justify-center ml-96 text-2xl rotate-90 text-white'>{resp.weather[0].main}</div>: null
            }
            { resp.name &&(
                            <div className='flex flex-row justify-center items-end h-full mb-16'>
                            <div className='flex flex-row justify-around text-white  bg-white bg-opacity-15 rounded-md p-5 w-1/2 text-2xl'>
                            <div>
                           
                                <div className='text-white font-bold'>{resp?.main?.feels_like.toFixed()}°F</div>
                                <div className='text-white'>Feels Like</div>
                            </div>
                            <div>
                                <div className='text-white font-bold'>{resp?.main?.humidity}%F</div>
                                <div className='text-white'>Humidity</div>
                            </div>
                            <div>
                                <div className='text-white font-bold'>{resp?.wind?.speed.toFixed()} MPH</div>
                                <div className='text-white'>Wind Speed</div>
                            </div>
                            </div>
                        </div>)

            }
            
            

         </div>
     </div>
    )
}

export default Search