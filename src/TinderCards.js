import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import db from "./firebase";

function TinderCards() {
  //   const [people, setPeople] = useState([
  //     {
  //       name: "Steve Jobs",
  //       url: "https://www.helpscout.com/images/blog/steve-jobs.jpg",
  //     },
  //     {
  //       name: "Mark Zuckerberg",
  //       url: "https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
  //     },
  //   ]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //this is the clean-up
      unsubscribe();
    };
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["UP", "DOWN"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
