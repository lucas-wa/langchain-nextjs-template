import { ChatWindow } from "@/components/ChatWindow";
import { UploadDocumentsForm } from "@/components/UploadDocumentsForm";

export default function Home() {
  return (


    <div className="flex h-full">
      <UploadDocumentsForm></UploadDocumentsForm>
      <ChatWindow
        endpoint="api/chat"
        emoji="🏴‍☠️"
        titleText="Patchy the Chatty Pirate"
        placeholder="I'm an LLM pretending to be a pirate! Ask me about the pirate life!"
      ></ChatWindow>
    </div>

  );
}
