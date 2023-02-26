import Card from '../Card/Card';

export default function Cards(props) {
  const { dogs } = props;
  //console.log(dogs)
  return (
    <>
      {/* con las llaves vamos a mapear dogs  com un map. para cada ddogs de cards renderize una Card CUANDO MAPEO PASO LOS OTROS OBJECTOS A MI AOPLICACION */}
      {/* Ahora vamos enviar la key para que no nos cause problema por ahora, despues vamos meter el id */}
      {
        
        dogs.map(dog => <Card
          key={dog.name}
          name={dog.name}
          breed_group={dog.breed_group}
          life_span={dog.life_span}
          image={dog.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />)
      }
      {/* <Card /> PASAMOS LAS PROPRIEDADE DESDE CARDS A CARD UTILIZANDO EL arreglo de dogs. Y dogs estaba recibiendo en nuestro PADRE HOMEla propriedad DOGS*/}
      
    </>
  );
}
