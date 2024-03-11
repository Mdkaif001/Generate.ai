"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionProps {
  isPro: boolean;
}
const SubscriptionButton = ({ isPro = false }: SubscriptionProps) => {
    const [loading, setLoading] = useState(false)
  const onClick = async() => {
    try {
        setLoading(true);
        const res = await axios.get("/api/stripe");
        window.location.href = res.data.url;
    } catch (error) {
      toast.error("Something went wrong")
    }finally{
        setLoading(false)
    }
  };
 
  return (
    <Button variant={isPro ? "default" : "premium"} disabled={loading} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export default SubscriptionButton;
