import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


import DesarrolloSvg from '@site/static/img/desarrollo.svg';


const FeatureList = [
  
  {
    title: 'Mi Enfoque',
    Svg: DesarrolloSvg,
    description: (
      <>
        Como estudiante, me interesa desarrollarme en diferentes ámbitos laborales relacionados 
        con la carrera que estoy cursando. Personalmente, tengo un especial interés en las áreas de 
         <strong> ciberseguridad</strong> y <strong>desarrollo</strong>.
      </>
    ),
  },
   {
    title: 'Habilidades',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Experiencia en SO <strong>Linux y Windows</strong>, con conocimientos en mantenimiento y configuración de hardware y software. 
        Manejo de<strong> C, C#, Bash, Java, Python, JavaScript, CSS y SQL </strong>, así como bases de datos relacionales (PostgreSQL). 
        Uso de Git (GitHub/GitLab). 
        Experiencia con <strong>.NET, FastAPI, Node.js y React.</strong>
        
      </>
    ),
  },
  {
    title: 'Educación',
    Svg: require('@site/static/img/LogoUNPSJB.svg').default,
    description: (
      <>
        Soy estudiante de la <strong>Universidad Nacional de la 
        Patagonia San Juan Bosco</strong>, en las carreras de <strong>Analista Programador y Lic. en Sistemas</strong> (2022 - presente).
      </>
    ),
  },
 
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
