function GoodDeeds() {
      /* create a hook for the variable `deeds` here */
      const [deeds, setDeeds] = React.useState([]); 
    
      function handleAddTask(e) {
        const input = e.target.previousSibling;
        setDeeds([...deeds,input.value])
    
        /* here you'll pass the setter an array with a new element 
        from `input.value` */
    
        input.value = '';
      }
    
      return (
        <>
          <h3>My Good Deeds</h3>
          <input type="text" />
          <button onClick={handleAddTask}>+</button>
          <ul>
            {deeds.map((deed, i) => (
              <li key={i}>{deed}</li>
            ))}
          </ul>
        </>
      );
    }
    
    ReactDOM.render((
      <GoodDeeds />
    ), document.querySelector('#root'));
    