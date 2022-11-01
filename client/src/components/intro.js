/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

export default function intro () {
  const fullStack = {
    float: 'right',
    color: '#d8bfd4',
    fontWeight: 'bold'
  };
  const namecolor = {
    color: '#31485c'
  };
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className="header">
      <h1 style={namecolor}>Hey, I'm Lance Bailey</h1>
      <p style={fullStack}> I'm a Full Stack Web Developer </p>
    </div>
  );
}
