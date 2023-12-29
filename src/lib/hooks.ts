import { useToast } from "@/components/ui/use-toast";

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