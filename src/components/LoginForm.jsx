import { useState } from 'react'
import Userfront from "@userfront/core";


// function handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     setState({
//         [target.name]: target.value,
//     });
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     Userfront.login({
//       method: "password",
//       emailOrUsername: emailOrUsername,
//       password: password,
//     });
//   }

export default function LoginForm () {

    Userfront.init("9ny854yb")

    const [ emailOrUsername, setEmailOrUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const handleSubmit = (e) => {
        Userfront.login({
            method: "password",
            emailOrUsername: emailOrUsername,
            password: password,
        })
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={e => { handleSubmit(e) }}>
            <label>
                Email or username
                <input
                name="emailOrUsername"
                type="text"
                value={emailOrUsername}
                onChange={e => setEmailOrUsername(e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Log in</button>
            </form>
      </div>
    )

}

// // Define the Login form component
// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       emailOrUsername: "",
//       password: "",
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     Userfront.login({
//       method: "password",
//       emailOrUsername: this.state.emailOrUsername,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Email or username
//             <input
//               name="emailOrUsername"
//               type="text"
//               value={this.state.emailOrUsername}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             Password
//             <input
//               name="password"
//               type="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button type="submit">Log in</button>
//         </form>
//       </div>
//     );
//   }
// }
