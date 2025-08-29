export const ServicesCard = (props) => {
    console.log(props);
    return (
        <card className="flex flex-col w-[20rem] justify-start h-[20rem] bg-white overflow-clip border-2 rounded-lg shadow-lg shadow-gray-600 m-4">
            <p className="font-roboto text-2xl ml-4 mt-4">{props.employeeName}</p>
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
        </card>
    );
};
