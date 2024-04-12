import React from 'react'


function Header() {
  return (
    
    <div className='border rounded-t-3xl m-2 ' style={{ background: '#EFF3FD', height:'100px' }}>
        <div id="first">
            <div className='flex relative'>
                
                <div className='flex relative' id="image" style={{display:'inline'}}>
                    <img
                        className="w-20 h-20 m-3 rounded-full border-red-500 bg-white "
                        src="https://s3-alpha-sig.figma.com/img/6baa/a9c9/7cbb691d0bf8e4efbb09d8e91c2e986c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVKRkgBouutMMUdNZ4ueKNPi9bMhMMLnISqKPW-dU~MBc42xjue~8j9hjcAqiIuzuss-XINFsTsBr3j3uYZDwiAg15nW1A6AFCj0dZFYt30YWmdEiODBg3FC3k~HdvMl18054D9LgeKrHAXqWUv4HmMsAIgytLrj7gdFK4vxRO1lXauNiVREtHHOM8PW768rYkYpoTkZc-excULb67QdJIr3rcTV-G4jUKPQjo5j9HDZr-fdphQ8APPByY75NO7uCpCwD9oZbGkJmKs6vuvoljm6Xyg7V0bDIoqte8kAnPTya7nVvumDK2an5YZcLGJtCwajrUFoTlmHjTu2gFSmBA__"
                        alt=""
                        />
                    <div className="z-10 absolute bottom-0 left-20 my-5 h-3 w-3  bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-5 left-24 " style={{display:"inline"}} id="text">
                        <p className="flex items-center "><span style={{text:'bold'}}>Timpu </span> <img src="src/components/Header/verify.png" alt="" /><br /></p>
                        <span>Chat Assistance</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div id="second"></div>

        
        
    </div>


// {/* <div className="relative">
            
//             <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             </div>
//         </div> */}

    
  )
}

export default Header
