const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="from-secondary-accent to-tertiary-accent text-altwhite text-[13px] font-[400] rounded bg-gradient-to-br px-[10px] py-[2px]">
      {children}
    </div>
  );
};

export default Tag;
