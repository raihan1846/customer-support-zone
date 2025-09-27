# What is JSX, and why is it used?

Ans: JSX means javascript XML, it's used for code read and write easyway.add logic and html same file 
## What is the difference between State and Props?

Ans: State -> self data and 
     Props-> others data,
     State -> it's changeable and component update this,
     Props -> it's not changeable, if you change first change parent component


## What is the useState hook, and how does it work?

Ans: It's react hook, it's used for functional component to state create and manage 
     Ex: const [manageData, setManageData] = useState(0);
## How can you share state between components in React?

Ex: function Dream() {
      const [dreamEl, setDreamEl] = useState(0);
      return (
        <>
          <ChildA dreamEl={dreamEl} />
          <ChildB setDreamEl={setDreamEl} />
        </>
      );
    }

## How is event handling done in React?

Ans:function ClickMe() {
     const handleClick = () => {
       alert("Click!");
     };
   
     return <button onClick={handleClick}>Click Me</button>;
   }
