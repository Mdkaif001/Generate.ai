"use client"

import {Crisp} from "crisp-sdk-web"
import { useEffect } from "react"

const CrispChat = () => {
    useEffect(()=>{
      Crisp.configure("d9817bdf-d2a6-4fb2-b600-274be74b2c2e")
    },[])
  return null;
}

export default CrispChat
