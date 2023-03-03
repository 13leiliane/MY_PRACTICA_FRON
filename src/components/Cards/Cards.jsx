import Card from "../Card/Card";
import styles from "./style/Cards.module.css"

export default function Cards(props) {
  const { characters, onClose } = props;
  const cards = characters.map((elem) => (
    <Card
      key={elem.id}
      name={elem.name}
      species={elem.species}
      gender={elem.gender}
      image={elem.image}
      onClose={onClose}
      id={elem.id}
      status={elem.status}
    />
  ));
  return <div className={styles.cards}>{cards}</div>;
}
// Sehuindo paso a paso com a professora.
