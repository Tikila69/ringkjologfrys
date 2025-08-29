export const Certificate = (props) => {
    const certificateStyle = {
        backgroundColor: props.backgroundColor,
        color: props.textColor,
    };
    return (
        <div
            style={certificateStyle}
            className="flex flex-col border rounded-xl h-4/5 max-w-xl text-l shadow-md shadow-gray-300 content-start"
        >
            <img
                className="flex items-center mt-4 w-2/3 self-center max-w-64"
                src={props.imgSource}
                alt={props.alttekst}
            />
            <p className="mt-2 p-4">{props.certificateText}</p>
        </div>
    );
};
