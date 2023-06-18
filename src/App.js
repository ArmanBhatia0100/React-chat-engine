import './styles.css';
import { ChatEngine } from 'react-chat-engine';
export default function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="
        da28bc70-b455-4f95-8c07-8216b3870779"
        userName="Admin"
        userSecret="admin@123"
        renderChatFeed={(chatAppState) => {
          console.log(chatAppState);
        }}
      />
    </div>
  );
}
