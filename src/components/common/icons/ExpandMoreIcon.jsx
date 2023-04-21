export default function ExpandMoreIcon({ toggle }) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 96 960 960"
            width="18"
            className={`${toggle ? 'rotate_vertical' : ''}`}
        >
        <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"/>
        </svg>
    );
};