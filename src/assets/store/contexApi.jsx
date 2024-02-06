import { createContext } from "react";
import { useState } from "react";

import Contact from "../components/contact-card/contact";
import Carousel from "../components/carousel/carousel";
import Projects from "../components/carousel/carousel";


export let ContextApi = createContext({


});




function ContextApiProvider({children}){

  const [isContact, setIsContact] =  useState(false);
  const [isProject, setIsProject] =  useState(false);
 







return(

<ContextApi.Provider value={{setIsContact, setIsProject, isProject,isContact}}>

{children}


{ isContact && <Contact/>}
{isProject && <Projects/>}

</ContextApi.Provider>

)

}

export default ContextApiProvider;