import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export function useToastHandler() {
  const { toast } = useToast();

  const handleError = (msg: string) => {
    console.error(msg);
    toast({
      title: "Error",
      variant: "error",
      description: msg,
    });
  };

  const handleSuccess = (msg: string) => {
    toast({
      title: "Success",
      variant: "success",
      description: msg,
    });
  };

  return { handleError, handleSuccess };
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};