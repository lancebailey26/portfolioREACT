export default function kit() {
  const fullStack = {
    float: "right",
    color: "#d8bfd4",
    fontWeight: "bold",
  };
  const text = {
    textAlign: "left",
    listStyleType: "circle",
  };
  const fujiPink = {
    color: "#d8bfd4",
  };
  const blueGray = {
    color: "#31485c",
  };
  return (
    <>
      <div data-aos="fade-right" data-aos-duration="1500" className="header">
        <h1 style={blueGray}>KIT</h1>
        <p style={fullStack}> what i use on a daily basis </p>
      </div>
      <div style={blueGray} className="content">
        <div className="kitContainer">
          <h2>DESKTOP</h2>
          <ul style={text}>
            <li>
              Keyboard:
              <a
                style={fujiPink}
                href="https://www.pcgamingrace.com/products/glorious-gmmk-pro-75-barebone-white"
              >
                Glorious GMMK Pro
              </a>
            </li>
            <ul>
              <li className="sub">
                an often overlooked and highly underrated part of any dev's
                toolkit.
              </li>
            </ul>
            <li>
              Mouse:
              <a
                style={fujiPink}
                href="https://www.amazon.com/Corsair-Scimitar-Gaming-Backlit-Optical/dp/B082LRMY53?th=1"
              >
                Corsair Scimitar
              </a>
            </li>
            <ul>
              <li className="sub">as reliable as it is versatile.</li>
            </ul>
            <li>
              Microphone:
              <a
                style={fujiPink}
                href="https://www.amazon.com/Blue-Yeti-USB-Microphone-Silver/dp/B00N1YPXW2?th=1"
              >
                Blue Yeti Pro
              </a>
              <ul>
                <li className="sub">the perfect mic for the modern world.</li>
              </ul>
            </li>
            <li>
              Headphones:
              <a
                style={fujiPink}
                href="https://www.amazon.com/beyerdynamic-1990-Pro-Black-Dt1990/dp/B01KM9EJ7I/"
              >
                Beyerdynamic DT 1990 Pro
              </a>
            </li>
            <ul>
              <li className="sub">
                pair them with a good amp, and you'll understand why you
                shouldn't skimp.
              </li>
            </ul>
          </ul>
        </div>

        <div className="kitContainer">
          <h2>MOBILE</h2>
          <ul style={text}>
            <li>
              Laptop:
              <a style={fujiPink} href="https://www.apple.com/macbook-air/">
                2021 MacBook Air
              </a>
            </li>
            <ul>
              <li className="sub">
                light, quiet, capable. Apple nailed it with this one.
              </li>
            </ul>
            <li>
              Headphones:
              <a style={fujiPink} href="https://www.apple.com/airpods-pro/">
                Airpod Pros
              </a>
            </li>
            <ul>
              <li className="sub">
                perfect for drowning out the noise of espresso machines at
                Starbucks.
              </li>
            </ul>
          </ul>
        </div>

        <div className="kitContainer">
          <h2>IDE</h2>
          <ul style={text}>
            <li>
              Editor:
              <a style={fujiPink} href="https://code.visualstudio.com/">
                VSCode
              </a>
            </li>
            <ul>
              <li className="sub">the gold standard.</li>
            </ul>
            <li>
              Theme:
              <a
                style={fujiPink}
                href="https://vscodethemes.com/e/RobbOwen.synthwave-vscode"
              >
                Synthwave '84
              </a>
            </li>
            <ul>
              <li className="sub">
                this changes a lot, but I've been feeling this theme recently.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
