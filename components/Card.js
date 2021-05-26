const Card = ({ imgH, imgW, imgSrc, cardHeader, cardData }) => {
  return (
    <article className="flex items-center justify-between p-2 border border-gray-400 rounded-md shadow-md">
      <img
        src={imgSrc}
        alt=""
        className={`object-cover rounded-lg mx-1 ${imgH} ${imgW}`}
      />
      <div className="p-1 ml-2">
        <h2 className="text-xl font-semibold text-brand-500 mb-0.5">
          {cardHeader}
        </h2>
        <p className="font-medium text-gray-800">{cardData}</p>
      </div>
    </article>
  );
};

export default Card;
