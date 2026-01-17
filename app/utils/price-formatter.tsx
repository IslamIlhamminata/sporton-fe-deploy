const priceFormatter = (price: number) => {
<<<<<<< HEAD
    const newFormat = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    }).format(price);
 
    return newFormat;
};

export default priceFormatter;
=======
  const newFormat = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  }).format(price);

  return newFormat;
};

export default priceFormatter;
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
