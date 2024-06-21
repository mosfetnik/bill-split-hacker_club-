import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />
          <FormAddfriend />
          <Button>Add Friend</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

function FriendList() {
  const friends = initialFriends;

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3> {friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You own {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owns you {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="gray"> You and {friend.name} are even</p>
      )}

      <Button> Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddfriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👩🏻‍🤝‍🧑🏻Friend Name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🦘 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2> Split the Bill with X</h2>

      <label> 💰 Bill Value</label>
      <input type="text" />

      <label> 👬 Ypur Expences</label>
      <input type="text" />

      <label> 💰 Xs Expences</label>
      <input type="text" disabled />

      <label> Who are paying the bill </label>
      <select>
        <option value="user"> You</option>
        <option value="friend">X</option>
      </select>

      <button> Splite Bill </button>
    </form>
  );
}
