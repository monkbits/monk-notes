import "./App.css";
import Github from "./Github";
import Others from "./Others";
import Home from "./Home";
import Onepiece from "./Onepiece";
import React,{useState} from "react";




function NavBar() {
    const [pageContent, setPageContent] = useState(<Home/>);


    const OnClickTab = (label)=>{
        if(label === "Home" )setPageContent(<Home/>);
        if(label === "One Piece" )setPageContent(<Onepiece/>);
        if(label === "Github" )setPageContent(<Github/>);
        if(label === "Others" )setPageContent(<Others/>);

    }


    const NavButton = (param)=>{ 
        return (
            <div
                className="custom-nav-btn"
                onClick={()=> OnClickTab(param.label)} 
            >
                {param.label}
            </div>
            
        );
    }

   
    

    return (
        <div>           
            <div className="d-flex">
                <NavButton label="Home"    />
                <NavButton label="One Piece"    />
                <NavButton label="Github"       />
                <NavButton label="Others"        />
            </div>
           <div className="maindiv">{pageContent}</div> 
        </div>
    )
}

export default NavBar;