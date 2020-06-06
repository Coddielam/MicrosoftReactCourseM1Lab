let Cars = [
  { year: 2013, model: "A", price: "$32000" },
  { year: 2011, model: "B", price: "$4400" },
  { year: 2016, model: "B", price: "$15500" },
];

let Trucks = [
  { year: 2014, model: "D", price: "$18000" },
  { year: 2013, model: "E", price: "$5200" },
];

let Convertibles = [
  { year: 2009, model: "F", price: "$2000" },
  { year: 2010, model: "G", price: "$6000" },
  { year: 2012, model: "H", price: "$12500" },
  { year: 2017, model: "M", price: "$50000" },
];

function PageTitle(props) {
  return (
    <div>
      <h2>Welcome to React Transportation</h2>
      <p>The best place to buy vehicles online</p>
    </div>
  );
}

function ChooseOptions(props) {
  return (
    <div>
      <h2>Choose Options</h2>
      <div>
        <label htmlFor="newOnly">
          New Only <input id="newOnly" type="checkbox" defaultChecked />
        </label>
      </div>

      <div>
        <label htmlFor="selectType">
          Select Type
          <select id="selectType" defaultValue="cars">
            <option value="all">All</option>
            <option value="cars">Cars</option>
            <option value="trucks">Trucks</option>
            <option value="convertibles">Convertibles</option>
          </select>
        </label>
      </div>
    </div>
  );
}

function VehicleListing(props) {
  return (
    <ul>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr>
            <td>{props.data.year}</td>
            <td>{props.data.model}</td>
            <td>{props.data.price}</td>
            <td>
              <button>Buy Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </ul>
  );
}

function VehicleTypes(props) {
  return (
    <div>
      <h2>{props.vehicleType}</h2>

      {props.vehicleData.map((listing, index) => {
        return <VehicleListing data={listing} key={index} />;
      })}
    </div>
  );
}

function ReactTransportationApp(props) {
  return (
    <div>
      <PageTitle />
      <ChooseOptions />
      <VehicleTypes vehicleType="Cars" vehicleData={Cars} />
      <VehicleTypes vehicleType="Trucks" vehicleData={Trucks} />
      <VehicleTypes vehicleType="Convertibles" vehicleData={Convertibles} />
    </div>
  );
}

ReactDOM.render(<ReactTransportationApp />, document.getElementById("root"));
