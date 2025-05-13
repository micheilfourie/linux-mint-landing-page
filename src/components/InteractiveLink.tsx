const InteractiveLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-primary-accent cursor-pointer group font-ubuntu relative overflow-hidden text-[15px]">
      {/* Single underline that animates in from left, out to right */}
      <span className="absolute bottom-1 left-0 h-[2px] w-full bg-primary-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>

      {children}
    </button>
  );
};

export default InteractiveLink;
