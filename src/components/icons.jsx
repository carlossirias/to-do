// eslint-disable-next-line react/prop-types
export function TrashIcon({ color = '#BDBDBD', perimeter ="24" }) {
    return (
        <svg width={perimeter} height={perimeter} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z" />
        </svg>
    )
}