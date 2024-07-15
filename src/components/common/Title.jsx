const Title = ({ sTitle, title }) => {
  return (
    <div>
      {!sTitle ? (
        <>
          <h2 className="lg:text-[30px] xl:text-[32px]  md:text-[28px] text-[24px] font-semibold">
            {title}
          </h2>
          <div className="w-[40px] h-[5px] my-1 md:my-3 bg-primary rounded-md"></div>
        </>
      ) : (
        <h2 className="lg:text-[22px] xl:text-[24px] text-[20px] font-semibold">
          {title}
        </h2>
      )}
    </div>
  );
};

export default Title;
