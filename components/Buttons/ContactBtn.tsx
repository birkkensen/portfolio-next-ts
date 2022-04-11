const ContactBtn: React.FC = (): JSX.Element => {
  return (
    <a
      className="font-bold text-white bg-charcoal px-5 py-3 rounded-lg opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-90"
      href="mailto:birk.kensen@gmail.com"
    >
      Contact
    </a>
  );
};

export default ContactBtn;
