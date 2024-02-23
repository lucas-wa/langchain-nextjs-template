import { ChatWindow } from "@/components/ChatWindow";
import { UploadDocumentsForm } from "@/components/UploadDocumentsForm";

export default function Home() {
  return (


    <div className="flex h-full">
      <UploadDocumentsForm></UploadDocumentsForm>
      <ChatWindow
        endpoint={process.env.NEXT_PUBLIC_API_URL + "/retriveal/stream"}
      ></ChatWindow>
    </div>

  );
}
