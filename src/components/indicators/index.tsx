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
        <CardIndicator data={indicator} />
      ))}
    </div>
  );
};

export default Indicators;
