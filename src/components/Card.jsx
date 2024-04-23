import headerBackground from "../assets/header-background.jpg";

export default function Card() {
  return (
    <div className="overflow-hidden rounded-md shadow-lg w-96">
      <header>
        <img
          src={headerBackground}
          alt=""
          style={{ backgroundImage: headerBackground }}
        />
      </header>
      <div className="p-4">
        <div className="mb-4 title">
          <h1 className="font-bold text-center">The Bridge</h1>
          <p className="italic text-center">by Shel Silverstein</p>
        </div>

        <div className="">
          <p>This bridge will only take you halfway there</p>
          <p>To those mysterious lands you long to see:</p>
          <p>Through gypsy camps and swirling Arab fairs</p>
          <p>And moonlit woods where unicorns run free.</p>
          <p>So come and walk awhile with me and share</p>
          <p>The twisting trails and wondrious worlds I've known.</p>
          <p>But this bridge will only take you halfway there-</p>
          <p>The last few steps you'll have to take alone.</p>
        </div>
      </div>
    </div>
  );
}
