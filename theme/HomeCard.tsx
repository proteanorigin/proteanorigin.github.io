import styles from './HomeCard.module.scss';

const cards = [
  { id: 1, title: 'White tea (白茶)', description: 'Description 1' },
  { id: 2, title: 'Card 2', description: 'Description 2' },
  { id: 3, title: 'Card 3', description: 'Description 3' },
];

export const HomeCard = () => (
  <div className={styles['home-cards']}>
    {
      cards.map(card => (
        <div key={card.id} className={styles['home-card-box']}>
          <div key={card.id} className={styles['home-card-item']}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))
    }
  </div>
);
