export default function Main({ movies }) {
  return (
    <>
      <div className="container">
        <div className="row g-2 my-2 mt-5">
          <div className="col-4">
            <div className="card">
              <div className="card-head text-center p-2">lista di film</div>
              <div className="card-body">imput per filtraggio</div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-head text-center p-2">lista di film</div>
              <div className="card-body">imput per filtraggio</div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-head text-center p-2">lista di film</div>
              <div className="card-body">imput per filtraggio</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-head">lista di film</div>
          <div className="card-body">imput per filtraggio</div>
        </div>
      </div>
    </>
  );
}
