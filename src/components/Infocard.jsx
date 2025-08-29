export const Infocard = (props) => {
    return (
        <section className="flex flex-col w-[20rem] justify-start h-[34rem] bg-white overflow-clip border-2 rounded-lg shadow-lg shadow-gray-600 m-4">
            <img
                className="p-4 w-[90%] min-h-56 self-center"
                src={props.imgSource}
                alt={props.tekst}
            />
            <h2 className="font-roboto text-xl ml-4">{props.employeeName}</h2>
            {props.tjenester ? (
                <hr className="border-1 border-solid border-[#25346d] w-[90%] ml-4" />
            ) : (
                ""
            )}
            <p className="m-4">{props.employeeDescription}</p>
            <p className="flex items-center justify-start text-[#25346d] text-lg font-roboto">
                {props.tlfIcon}
                {props.tlfnr}
            </p>
        </section>
    );
};
