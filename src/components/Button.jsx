export const Button = (props) => {
    return (
        <button
            className="flex items-center justify-center border border-solid rounded-lg h-fit min-h-10 w-fit p-3"
            style={{
                cursor: props.pointer ? "pointer" : "default",
                backgroundColor: props.backgroundColor,
                color: props.textColor,
                fontSize: props.fontSize,
            }}
        >
            {props.text}
        </button>
    );
};
