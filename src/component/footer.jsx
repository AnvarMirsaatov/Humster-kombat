const navItems = [
  { label: "Exchange", icon: "🪙" },
  { label: "Mine", icon: "⛏️" },
  { label: "Friends", icon: "👥" },
  { label: "Earn", icon: "💬" },
  { label: "Airdrop", icon: "🎁" },
];

const Footer = () => {
  return (
    <nav className="mt-5 grid grid-cols-5 gap-2 rounded-2xl border border-[#273552] bg-[#1d2026] p-2">
      {navItems.map((item, index) => (
        <button
          key={item.label}
          className={[
            "flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium text-white/80 transition",
            index === 1 ? "bg-[#2b4a7a] text-white shadow-[0_0_20px_rgba(85,132,255,0.4)]" : "hover:bg-white/5",
          ].join(" ")}
        >
          <span className="text-lg">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Footer;
