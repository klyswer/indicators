import CardIndicator from "./CardIndicator";
import './index.css';

interface Props {
  indicators: Array<{
    nombre: string,
    codigo: string,
    valor: number
  }>;
}

const Indicators = ({ indicators }: Props) => {
  return (
    <div className="container-main bg-indicators ">
      {indicators.map((indicator) => (
        <div key={indicator?.codigo}>
          <CardIndicator data={indicator} />
        </div>
      ))}
    </div>
  );
};

export default Indicators;
