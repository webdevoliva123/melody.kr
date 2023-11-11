import React, { useEffect, useState } from "react";
import {BsSunFill,BsMoonFill} from 'react-icons/bs'
import {GoArrowUp} from 'react-icons/go'
const FloatingWidgets = () => {
  const [theme, setTheme] = useState("ligth");
  const [showSBtn,setShowSBtn] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if(localStorage.getItem('melody_theme')){
        return setTheme(localStorage.getItem('melody_theme'))
    }
  },[])

  const themeSwicthHandler = () => {
    var isDarkTheme = document.documentElement.getAttribute("data-theme") === "dark";

    if (isDarkTheme) {
       setTheme("light");
       localStorage.setItem('melody_theme', 'light')
    } else {
       setTheme("dark");
       localStorage.setItem('melody_theme', 'dark')
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',() => {
        if(window.scrollY > 200){
            setShowSBtn(true)
        }else{
            setShowSBtn(false)
        }
    })
  },[])

  const makePageTop = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }


  return (
    <>
      <div className={`fixed ${showSBtn  ? 'bottom-8' : 'bottom-6'} block ease-in duration-150 right-8 z-[1000]`}>
        {/* theme switcher */}
        <div className="w-8 h-8 shadow-lg rounded-lg bg-accent cursor-pointer flex justify-center items-center" onClick={() => themeSwicthHandler()}>
           {theme === 'dark' ? <BsSunFill className="text-white" /> : <BsMoonFill size={15} className="text-white" />}
        </div>
        <div className={` ${showSBtn ? 'rleative block ease-in duration-300' :'hidden absolute -bottom-8'}  w-8 h-8 shadow-lg rounded-lg bg-accent bg-opacity-10 cursor-pointer flex justify-center items-center mt-3`} onClick={() => makePageTop()}>
           <GoArrowUp className="text-accent" /> 
        </div>
      </div>
    </>
  );
};

export default FloatingWidgets;
