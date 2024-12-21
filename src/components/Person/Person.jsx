// export const Person = ({ person }) => ();
export const Person = ({ props }) => {
  const sex = props.sex === 'f' ? 'husband' : 'wife';
  return (
    <section>
      <h2> My name is {props.name} </h2>
      <p>{props.age ? `I am ${props.age}` : ''}</p>
      <p>
        {props.isMarried === true
          ? `${props.partnerName} is my ${sex}`
          : `I am not married`}
      </p>
    </section>
  );
};
