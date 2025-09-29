export const Header = ({
  logoSrc,
  buttons,
  contacts,
  action,
}: {
  logoSrc: string;
  buttons: React.ReactNode;
  contacts: React.ReactNode;
  action: React.ReactNode;
}) => {
  return (
    <div className="h-30 flex items-center justify-around max-lg:flex-col @container">
      <img
        src={logoSrc}
        className="max-h-[70%] max-w-[70%]"
      />
      <div className="flex max-lg:flex-col">{buttons}</div>
      <div className="flex max-lg:flex-col gap-5">
        {contacts}
        {action}
      </div>
    </div>
  );
};
