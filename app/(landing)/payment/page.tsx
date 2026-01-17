import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
  return (
<<<<<<< HEAD
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
            <PaymentOptions />
            <PaymentSteps />
=======
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions />
          <PaymentSteps />
>>>>>>> 7bf438c (Update Integrasi Frontend & Backend)
        </div>
      </div>
    </main>
  );
};

export default Payment;
