import { Button } from '#ui/button';
import { Header } from '$ui/Header';
import logoSrc from '$uzi/basis/assets/logo.png';
import './app.css';

export const UziApp = () => {
  return (
    <div className="kabinet-uzi-crimea">
      <Header
        logoSrc={logoSrc}
        buttons={
          <>
            <Button variant="ghost">Врачи</Button>
            <Button variant="ghost">Услуги</Button>
            <Button variant="ghost">Пациентам</Button>
            <Button variant="ghost">О нас</Button>
            <Button variant="ghost">Контакты</Button>
          </>
        }
        contacts={
          <div className="flex flex-col mx-3">
            <a href="tel:+79787752867">+7 978 775 28 67</a>
            <a href="tel:+79788638613">+7 978 863 86 13</a>
          </div>
        }
        action={<Button className="rounded-full">Заказать звонок</Button>}
      />
    </div>
  );
};
