const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-dark m-0 p-2">
      <p className="text-light text-center pt-2">
        Developed by queenmahi & sarah copyright &copy; {date}
      </p>
    </footer>
  );
};

export default Footer;
