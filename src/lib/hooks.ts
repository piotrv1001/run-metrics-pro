import { useToast } from "@/components/ui/use-toast";

export function useToastHandler() {
  const { toast } = useToast();

  const handleError = (msg: string) => {
    console.error(msg);
    toast({
      title: "Error",
      description: msg,
    });
  };

  const handleSuccess = (msg: string) => {
    toast({
      title: "Success",
      description: msg,
    });
  };

  return { handleError, handleSuccess };
}