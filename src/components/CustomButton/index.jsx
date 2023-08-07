export default function CustomButtom({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      class="duration-150 text-[24px] border-[2px] border-secondary-dark px-[50px] py-[4px] hover:text-black hover:bg-secondary-main hover:border-secondary-main uppercase"
    >
      {children}
    </button>
  );
}
