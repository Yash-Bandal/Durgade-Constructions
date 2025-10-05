const FounderCard = ({ imgURL, founderName, post, feedback }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-200">
            {/* Image Frame */}

            <div className="w-px h-14 sm:h-16 md:h-18 bg-amber-600"></div>
            <div className="w-14 sm:w-16 md:w-18 h-px bg-amber-600 mb-4"></div>
            

            <div className="overflow-hidden border-2 border-gray-300">
                
                <img
                    src={imgURL}
                    alt={founderName}
                    className="
            w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80
            object-cover
          "
                />
            </div>

            <div className="w-14 sm:w-16 md:w-18 h-px bg-amber-600 mt-4"></div>
            <div className="w-px h-14 sm:h-16 md:h-18 bg-amber-600"></div>


            {/* Name */}
            <h3 className="mt-6 text-2xl font-bold font-palanquin text-gray-900">
                {founderName}
            </h3>

            {/* Position */}
            <p className="mt-2 text-lg text-gray-600 font-montserrat">
                {post}
            </p>
            
        </div>
    );
};

export default FounderCard;
