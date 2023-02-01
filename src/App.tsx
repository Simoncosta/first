import { Component, PropsWithChildren } from 'react';

interface TeamProps {
  name: string;
  age?: string;
  office: string;
  instagram: string;
  linkedin: string;
}

interface AboutProps {
  nome: string;
  idade?: string;
  cargo: string;
}

interface SocialProps {
  instagram: string;
  linkedin: string;
}

const Social = (props: SocialProps) => {
  return (
    <>
      <a href={props.instagram}>Instagram</a>
      <br />
      <a href={props.linkedin}>LinkedIn</a>
    </>
  );
}

const About = (props: AboutProps) => {
  return (
    <>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </>
  );
}

const Team = (props: TeamProps) => {
  return (
    <>
      <About nome={props.name} idade={props.age} cargo={props.office} />
      <Social instagram={props.instagram} linkedin={props.linkedin} />
      <hr />
    </>
  );
}

// class Team extends Component {
//   render() {
//     return (
//       <>
//         <h2>Olá sou o(a) {this.props.nome}</h2>
//       </>
//     );
//   }
// }

interface DescriptionProps {
  children: string;
  color: string;
}

const Description = (props: DescriptionProps) => {
  return(
    <p style={{ color: props.color }}>
      {props.children}
    </p>
  );
}

function App() {

  const teamSocial = [
    {
      id: "1",
      name: "Simon",
      age: "15",
      office: "UX/UI",
      instagram: "www.instagram.com",
      linkedin: "www.linkedin.com"
    },
    {
      id: "2",
      name: "Joao",
      age: "18",
      office: "Developer",
      instagram: "www.instagram.com",
      linkedin: "www.linkedin.com"
    },
    {
      id: "3",
      name: "Joaquim",
      age: "20",
      office: "Tesoureiro",
      instagram: "www.instagram.com",
      linkedin: "www.linkedin.com"
    }
  ];

  return (
    <>
      {/* <Team nome="Simon" /> */}
      <h1>Conheça nossa equipe</h1>
      {
        teamSocial.map((result) => (
          <Team key={result.id} name={result.name} age={result.age} office={result.office} instagram={result.instagram} linkedin={result.linkedin} />
        )
        )
      }
      <Description color="red">
        Lorem ipsum gernspidj jdflaksj daklfjdslkfj sdlfkjs dsfkjds klfj dsklfjdsklfj dsklfjsd kljfdskljf klsdjf klsdjdfkld sj
      </Description>
    </>
  )
}

export default App
