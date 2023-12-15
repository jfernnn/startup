**Github seems like a very useful thing to use**
>This Class should be very informative


**In the following code, what does the link element do?**
>
**In the following code,  what does a div tag do?**
>
**In the following code, what is the difference between the #title and .grid selector?**
>
**In the following code, what is the difference between padding and margin?**
> Margin is around the border, padding is space around the element inside the border.
**Given this HTML and this CSS how will the images be displayed using flex?**
> 
**What does the following padding CSS do?**
>
**What does the following code using arrow syntax function declaration do?**
>
**What does the following code using map with an array output?**
**What does the following code output using getElementByID and addEventListener?**
**What does the following line of Javascript do using a # selector?**
**Which of the following are true? (mark all that are true about the DOM)**
**By default, the HTML span element has a default CSS display property value of:**
**How would you use CSS to change all the div elements to have a background color of red**
**How would you display an image with a hyperlink in HTML?**
**In the CSS box model, what is the ordering of the box layers starting at the inside and working out?**
**Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?**
**What will the following code output when executed using a for loop and console.log?**
**How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?**
**What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?**
**How do you declare the document type to be html?**
**What is valid javascript syntax for if, else, for, while, switch statements?**
**What is the correct syntax for creating a javascript object?**
**Is is possible to add new properties to javascript objects?**
**If you want to include JavaScript on an HTML page, which tag do you use?**
**Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?**
**Which of the following correctly describes JSON?**
**What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?**
**Which of the following console command creates a remote shell session?**
**Which of the following is true when the -la parameter is specified for the ls console command?**
**Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?**
**Is a web certificate is necessary to use HTTPS.**
**Can a DNS A record can point to an IP address or another A record.**
**Port 443, 80, 22 is reserved for which protocol?**
**What will the following code using Promises output when executed?**


**Finals review**



**What ports are used for HTTP, HTTPS, SSH?**
> 80, 22, 443
**What do HTTP status codes in the 300, 400, 500 range indicate?**
> 300 - Redirection (not an error)
> 400 - Client error responses
> 500 - Server error responses
**What does the HTTP header content-type allow you to do?**
> Tells you what kind of content you are dealing with (Json, etc)
**What do the following attributes of a cookie do?**
> Domain - what domain the cookie is coming from
> Path - the path where the cookie was generated
> SameSite - will only return the cookie to the same site that generated it
> HTTPOnly - tells the browser do not run javascript on the browser so it can read the cookie
**Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?**
> Determine which functions are called and in which order with mutliple console.log calls
**Given the following Express service code: What does the following JavaScript fetch return?**
> Similar to q 5
**Given the following MongoDB query**
>>{ cost: { $gt: 10 }, name: /fran.*/}
>>select all of the matching documents. (. means any character, * means any amount of the character)
> Grab all docs with a cost greater than 10 and a name that starts with fran
**How should you store user passwords in a database?**
> It should encrpyt it by hashing and salting it
**Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?**
> Be familiar w web sockets (on connect, on disconnect, on message)
**What is the WebSocket protocol used for?**
> It is used for real time updates, chatting 
> Either server or client can initiate contact
**What is JSX and how are the curly braces rendered?**
> Java script and html smooshed together
**Assuming a HTML document with a**
    <div id="root"></div>
    element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
> Hello, Sara
> Hello, Cahal
> Hello, Edite
**Assuming a HTML document with a**
    <div id="root"></div>
    element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
> -1
> -2
> -3
> -4
> -5
**What does the following React component do?**
  function Example() {
    // Declare a new state variable, which we'll call "count"  
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
> It will increase the count by 1 starting at 0
> It will also display the Click me button
**What are React Hooks used for?**
> Used to modify the state of a component (handle the state)
> They also handle the life cycle events of a component (create, destroy, etc)
**What is the useEffect hook used for?**
> It watches the lifecycle events for the component and runs things based on it
> Rerendering components if buttons are clicked
> When a variable is changed, you can use an useEffect hook to update it/ update the screen
**What does this code do?**
  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
> Renders the page with the layout elements, if it is just / it will display the Home
> If it is /blogs render Blogs, if it is /contact render Contact
> If it is anything else render NoPage
**What role does npm play in web development?**
> Manages your node packages, allows you to download 3rd party packages
**What does package.json do in a npm project?**
> Lists all packages you have, specify certain deployment scripts
> 
**What does the fetch function do?**
> 
**What does node.js do?**
> 
**What does Vite do?**
> 
