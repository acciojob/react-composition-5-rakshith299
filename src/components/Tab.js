import React, {useState} from "react";
import ReactDOM from "react-dom";

const Tab = ({arr1,arr2}) => {
    const [selectedTab, setSelectedTab] = useState({"name": "Tab 1", "content": "Content for Tab 1"});
    const [letterTab, setLetterTab] = useState({"name" : "Tab A", "content": "Content for Tab A"});

    console.log(arr1);

    
    return (
       <div>
             
            <ul>  
                {arr1.map((eachTab) => (
                    <li onClick={() => setSelectedTab(eachTab)}>{eachTab.name}</li>
                ))}
            </ul>
            <p>{selectedTab.content}</p>


            <ul>  
                {arr2.map((eachTab) => (
                    <li onClick={() => setLetterTab(eachTab)}>{eachTab.name}</li>
                ))}
            </ul>
            <p>{letterTab.content}</p>


        
       </div>
    )
}

export default Tab;