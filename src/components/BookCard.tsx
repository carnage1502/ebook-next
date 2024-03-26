const BookCard = ({ title, description, coverImage, onClick }: any) => {
  return (
    <div
      className="w-[200px] p-4 rounded-[5px] bg-[#eeedeb] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform_0.3s_ease] mb-6 mr-[1.6rem]"
      onClick={onClick}
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full aspect-square rounded-[5px]"
      />
      <div className="mt-4">
        <h3 className="text-sm mb-2 text-[#000] font-bold">{title}</h3>
        <p className="text-[0.8rem] text-[#888]">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
