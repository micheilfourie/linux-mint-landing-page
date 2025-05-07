const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="from-secondary-accent to-tertiary-accent text-altwhite text-[14px] rounded bg-gradient-to-br px-[10px] py-[2px]">
      {children}
    </div>
  );
};

export default Tag;
