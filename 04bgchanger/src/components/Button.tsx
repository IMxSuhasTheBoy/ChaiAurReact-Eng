function Button({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-600/90 text-white px-4 py-1 hover:bg-orange-600 rounded-2xl shadow-xl`}
    >
      {color}
    </button>
  );
}

export default Button;
