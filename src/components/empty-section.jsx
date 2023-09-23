// eslint-disable-next-line react/prop-types
export function EmptySection({message = 'This section is empty'})
{
    return(
        <div className="w-full h-full flex items-center justify-center">
            <span className="montserrat font-medium text-sm md:text-lg text-gray-600">{message}</span>
        </div>
    )
}