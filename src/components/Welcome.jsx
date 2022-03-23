import React, { useState, useEffect } from 'react';

export function Welcome(props) {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>Olá, {props.user.name} {props.user.surname}</h1>
      <h2>Agora são {date.toLocaleTimeString()}</h2>
      <img src={props.user.image} height={200} />
    </div>
  );
}

// export class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() }
//   }

//   tick() {
//     this.setState({ date: new Date() });
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Olá, {this.props.user.name} {this.props.user.surname}</h1>
//         <h2>Agora são {this.state.date.toLocaleTimeString()}</h2>
//         <img src={this.props.user.image} height={200} />
//       </div>
//     );
//   }
// }
