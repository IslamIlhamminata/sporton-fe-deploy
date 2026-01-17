type TCardWithHeaderProps = {
<<<<<<< HEAD
    title: string,
    children: React.ReactNode;
}

const CardWithHeader = ({title, children}:TCardWithHeaderProps) => {
    return (
        <div className="bg-white">
            <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>
            {children}
        </div>
    )
}

export default CardWithHeader;
=======
  title: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ title, children }: TCardWithHeaderProps) => {
  return (
    <div className="bg-white">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default CardWithHeader;
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
