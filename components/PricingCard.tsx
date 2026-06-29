type Props = {
  rate: string;
};

export default function PricingCard({ rate }: Props) {

  return (

    <div>

      <h2>GPU Pricing</h2>

      <p>{rate}</p>

    </div>

  );

}
