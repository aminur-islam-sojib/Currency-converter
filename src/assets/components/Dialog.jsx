const Dialog = ({cartProduct}) => {
  return (
    <div>
      <h1>Hlw from dialog</h1>
      <p className="mt-5">Added Product: {cartProduct.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}</p>
    </div>
  );
};

export { Dialog };

