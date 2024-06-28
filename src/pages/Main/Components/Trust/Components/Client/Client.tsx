interface ClientProps {
  src: string;
  alt: string;
}

const Client = ({ src, alt }: ClientProps) => {
  return <img src={src} alt={alt} />;
};

export default Client;
