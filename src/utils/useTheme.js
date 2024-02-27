import { useState , useEffect  } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const useTheme=()=>{
   const [theme,setTheme]=useState(false);
   const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);
   useEffect(()=>{
    setTheme(themeMode);
   },[themeMode]);
   return  theme;
}
export default useTheme;

