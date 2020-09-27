import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey! how are you"
        timestamp="35 minutes ago"
        profilePic="https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg"
      />
      <Chat
        name="Elon"
        message="What's up yo!"
        timestamp="30 minutes ago"
        profilePic="https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_ba.jpg"
      />
      <Chat
        name="Dix"
        message="You are amazing..!"
        timestamp="20 minutes ago"
        profilePic="https://lh3.googleusercontent.com/a-/AOh14Gh7WBMTM3hd_qrHPN94hS9M10t0LZHXH7h230Vb=s360-c"
      />
      <Chat
        name="Bill"
        message="This is an amazing app."
        timestamp="1 hour ago"
        profilePic="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
      />
      <Chat
        name="Steve"
        message="Kudos to you guys!"
        timestamp="40 minutes ago"
        profilePic="https://www.helpscout.com/images/blog/steve-jobs.jpg"
      />
    </div>
  );
}

export default Chats;
