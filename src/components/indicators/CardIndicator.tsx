import React from "react";

interface Props {
    data: {
        nombre?:string,
        codigo: string,
        valor:number
    }
}

const CardIndicator = ({data}:Props) => {
  return (
    <div className="col">
      <div className="card card-container">
        <div className="card-body">
          <h5 className="card-title">{data?.codigo?.substring(0,25).toUpperCase()}</h5>
          <p className="card-text">
            {`${data?.nombre?.substring(0,50)}.`}
          </p>
          <div className="box-custom">
            {data.valor}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIndicator;
